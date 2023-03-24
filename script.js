class Character {
  constructor(name, HP, Atk, Mag, Acc, Def, Mdef, Spd) {
    this.name = name;
    this.hp = HP;
    this.hitpoint = HP;
    this.atk = Atk;
    this.mag = Mag;
    this.acc = Acc;
    this.def = Def;
    this.mdef = Mdef;
    this.spd = Spd;
  }
  attack(opponent) {
    let damage = this.atk - opponent.def;
    if (this.acc < Math.random()) {
      alert(`${this.name} missed!`);
      // console.log(`${this.name} missed`);
    } else {
      if (damage < 1) {
        //makes sure negative numbers aren't subtracted from opponent's hp
        alert(`${this.name} dealt 0 damage to ${opponent.name}!`);
      } else {
        // console.log(opponent.name + opponent.hitpoint);
        alert(`${this.name} dealt ${damage} damage to ${opponent.name}!`);
        if (opponent === player) {
          player.hitpoint -= damage;
          bHP.value = parseInt(bHP.value) - parseInt(damage);
        } else {
          enemy.hitpoint -= damage;
          enemyHP.value = parseInt(enemyHP.value) - parseInt(damage);
        }
        if (opponent.hitpoint < 1) {
          alert(`${opponent.name} was defeated!`);
          // console.log(`${opponent.name} was defeated`);
        }
      }
    }
  }
  magAttack(opponent) {
    let damage = this.mag - opponent.mdef;
    // console.log("magic damage: " + damage);
    if (this.acc < Math.random()) {
      alert(`${this.name} missed!`);
      // console.log(`${this.name} missed`);
    } else {
      if (damage < 1) {
        //makes sure negative numbers aren't subtracted from opponent's hp
        alert(`${this.name} dealt 0 damage to ${opponent.name}!`);
      } else {
        // console.log(opponent.name + opponent.hitpoint);
        alert(`${this.name} dealt ${damage} damage to ${opponent.name}!`);
        if (opponent === player) {
          player.hitpoint -= damage;
          bHP.value = parseInt(bHP.value) - parseInt(damage);
          if (player.hitpoint < 1) {
            alert(`${opponent.name} was defeated!`);
            // console.log(`${opponent.name} was defeated`);
          }
        } else {
          enemy.hitpoint -= damage;
          enemyHP.value = parseInt(enemyHP.value) - parseInt(damage);
          if (enemy.hitpoint < 1) {
            alert(`${opponent.name} was defeated!`);
            // console.log(`${opponent.name} was defeated`);
          }
        }
      }
    }
  }
  heal() {
    this.hitpoint = parseInt(this.hitpoint) + parseInt(this.mag);
    console.log(this.hitpoint);
    //snippet below prevents restoring HP above your current maximum HP
    if (this.hitpoint > this.hp) {
      let hpDifference = this.hitpoint - this.hp;
      this.hitpoint -= hpDifference;
      bHP.value = this.hitpoint;
      console.log(this.hitpoint);
    } else {
      bHP.value = this.hitpoint;
    }
  }
}

//creating player character
const player = new Character();
console.log(player);

//creating enemies
let enemy;
const fightGoblin = document.querySelector(".fightgob");
fightGoblin.addEventListener("click", () => {
  const goblin = new Character(
    "Goblin",
    randomNumber(3, 11),
    randomNumber(6, 10),
    randomNumber(3, 4),
    accuracyNumber(3, 6),
    randomNumber(3, 5),
    randomNumber(3, 4),
    randomNumber(3, 6)
  );
  // console.log(goblin);
  //staging for battle
  enemy = goblin;
  // console.log(enemy);
  stageEnemy(goblin);
});
const fightWizard = document.querySelector(".fightwiz");
fightWizard.addEventListener("click", () => {
  const wizard = new Character(
    "Wizard",
    randomNumber(8, 15),
    randomNumber(3, 6),
    randomNumber(10, 14),
    accuracyNumber(6, 10),
    randomNumber(3, 6),
    randomNumber(8, 12),
    randomNumber(6, 9)
  );
  // console.log(wizard);
  //staging for battle
  enemy = wizard;
  stageEnemy(wizard);
});
const fightDragon = document.querySelector(".fightdrg");
fightDragon.addEventListener("click", () => {
  const dragon = new Character(
    "Dragon",
    randomNumber(25, 50), //hp
    randomNumber(15, 23), //atk
    randomNumber(15, 23), //mag
    accuracyNumber(9, 11), //acc
    randomNumber(12, 20), //def
    randomNumber(12, 20), //mdef
    randomNumber(12, 20) //spd
  );
  // console.log(dragon);
  //staging for battle
  enemy = dragon;
  stageEnemy(dragon);
});
fightDragon.disabled = true;
fightGoblin.disabled = true;
fightWizard.disabled = true;
//enemy functions
const ename = document.querySelector(".enemyname");
const ePic = document.querySelector(".e-pic"); //changes enemy picture
const enemyHP = document.querySelector(".foehp");
const enemyAtk = document.querySelector(".foeatk");
const enemyMag = document.querySelector(".foemag");
const enemyAcc = document.querySelector(".foeacc");
const enemyDef = document.querySelector(".foedef");
const enemyMdef = document.querySelector(".foemdef");
const enemySpd = document.querySelector(".foespd");
function stageEnemy(enemy) {
  ename.innerHTML = enemy.name;
  enemyHP.value = enemy.hp;
  enemyAtk.value = enemy.atk;
  enemyMag.value = enemy.mag;
  enemyAcc.value = enemy.acc;
  enemyDef.value = enemy.def;
  enemyMdef.value = enemy.mdef;
  enemySpd.value = enemy.spd;
  if (enemy === goblin) {
    ePic.src = "";
  }
  console.log(enemy);
  battlePrep();
}
function enemyAtkChoice() {
  if (enemy.atk > enemy.mag) {
    enemy.attack(player);
  } else {
    enemy.magAttack(player);
  }
}
//Enemy Stat generators
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
function accuracyNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min) / 10;
}
//battle functions
function battlePrep() {
  allocater.disabled = true;
  fightDragon.disabled = true;
  fightGoblin.disabled = true;
  fightWizard.disabled = true;
  atkButton.disabled = false;
  magButton.disabled = false;
  healButton.disabled = false;
}
function battleEnd() {
  if (player.hitpoint > 0) {
    money.value = parseInt(money.value) + 10;
    statPool.value = parseInt(statPool.value) + 1;
  } else if (player.hitpoint < 1) {
    alert(
      "You lost. Start over from the beginning. The page will now refresh."
    );
    location.reload();
  }
  allocater.disabled = false;
  fightDragon.disabled = false;
  fightGoblin.disabled = false;
  fightWizard.disabled = false;
  atkButton.disabled = true;
  magButton.disabled = true;
  healButton.disabled = true;
}
//staging Player for battle
const pname = document.querySelector(".playername");
const pPic = document.querySelector(".p-pic"); //changes player picture
const bHP = document.querySelector(".hp2");
const bAtk = document.querySelector(".atk2");
const bMag = document.querySelector(".mag2");
const bAcc = document.querySelector(".acc2");
const bDef = document.querySelector(".def2");
const bMdef = document.querySelector(".mdef2");
const bSpd = document.querySelector(".spd2");
function stagePlayer() {
  player.name = playerName.value;
  // console.log("Name: " + player.name);
  // pPic.src = "";
  baseVit += vitCount;
  baseStr += strCount;
  baseDex += dexCount;
  baseRes += resCount;
  baseInt += intCount;
  vitCount = 0;
  strCount = 0;
  dexCount = 0;
  resCount = 0;
  intCount = 0;
  hp.value = parseInt(hp.value) + parseInt(hpBonus.value);
  atk.value = parseInt(atk.value) + parseInt(atkBonus.value);
  mag.value = parseInt(mag.value) + parseInt(magBonus.value);
  acc.value = parseInt(acc.value) + parseInt(accBonus.value);
  def.value = parseInt(def.value) + parseInt(defBonus.value);
  mdef.value = parseInt(mdef.value) + parseInt(mdefBonus.value);
  spd.value = parseInt(spd.value) + parseInt(spdBonus.value);
  hpBonus.value = 0;
  atkBonus.value = 0;
  magBonus.value = 0;
  accBonus.value = 0;
  defBonus.value = 0;
  mdefBonus.value = 0;
  spdBonus.value = 0;
  player.hp = hp.value;
  player.hitpoint = hp.value;
  player.atk = atk.value;
  player.mag = mag.value;
  player.acc = 5 / 10 + acc.value / 100;
  player.def = def.value;
  player.mdef = mdef.value;
  player.spd = spd.value;
  pname.innerHTML = player.name;
  bHP.value = player.hp;
  bAtk.value = player.atk;
  bMag.value = player.mag;
  bAcc.value = player.acc;
  bDef.value = player.def;
  bMdef.value = player.mdef;
  bSpd.value = player.spd;
}
//Stat Screen
//player name
const playerName = document.getElementById("name");
//menu1
const statPool = document.querySelector(".statpool");
const statPoolBox = document.querySelector("finalizer");
let vitCount = 0;
let baseVit = 1;
let strCount = 0;
let baseStr = 1;
let dexCount = 0;
let baseDex = 1;
let resCount = 0;
let baseRes = 1;
let intCount = 0;
let baseInt = 1;
//selecting buttons and stats
//menu1
const vitTemp = document.querySelector(".vit");
const mVit = document.querySelector(".vitm");
const pVit = document.querySelector(".vitp");
const strTemp = document.querySelector(".str");
const mStr = document.querySelector(".strm");
const pStr = document.querySelector(".strp");
const dexTemp = document.querySelector(".dex");
const mDex = document.querySelector(".dexm");
const pDex = document.querySelector(".dexp");
const resTemp = document.querySelector(".res");
const mRes = document.querySelector(".resm");
const pRes = document.querySelector(".resp");
const intTemp = document.querySelector(".int");
const mInt = document.querySelector(".intm");
const pInt = document.querySelector(".intp");
const allocater = document.querySelector(".allocate");
//menu2
const hp = document.querySelector(".hp");
const atk = document.querySelector(".atk");
const mag = document.querySelector(".mag");
const acc = document.querySelector(".acc");
const def = document.querySelector(".def");
const mdef = document.querySelector(".mdef");
const spd = document.querySelector(".spd");
const hpBonus = document.querySelector(".hpbonus");
const atkBonus = document.querySelector(".atkbonus");
const magBonus = document.querySelector(".magbonus");
const accBonus = document.querySelector(".accbonus");
const defBonus = document.querySelector(".defbonus");
const mdefBonus = document.querySelector(".mdefbonus");
const spdBonus = document.querySelector(".spdbonus");
//clicking on stat buttons
mVit.addEventListener("click", () => {
  if (vitTemp.value != baseVit) {
    vitTemp.value--;
    vitCount--;
    hpBonus.value = parseInt(hpBonus.value) - 3;
    statPool.value++;
  }
});
pVit.addEventListener("click", () => {
  if (statPool.value != 0) {
    vitTemp.value++;
    vitCount++;
    hpBonus.value = parseInt(hpBonus.value) + 3;
    statPool.value--;
  }
});
mStr.addEventListener("click", () => {
  if (strTemp.value != baseStr) {
    strTemp.value--;
    strCount--;
    atkBonus.value--;
    statPool.value++;
  }
});
pStr.addEventListener("click", () => {
  if (statPool.value != 0) {
    strTemp.value++;
    strCount++;
    atkBonus.value++;
    statPool.value--;
  }
});
mDex.addEventListener("click", () => {
  if (dexTemp.value != baseDex) {
    dexTemp.value--;
    dexCount--;
    spdBonus.value--;
    accBonus.value--;
    statPool.value++;
  }
});
pDex.addEventListener("click", () => {
  if (statPool.value != 0) {
    dexTemp.value++;
    dexCount++;
    spdBonus.value++;
    accBonus.value++;
    statPool.value--;
  }
});
mRes.addEventListener("click", () => {
  if (resTemp.value != baseRes) {
    resTemp.value--;
    resCount--;
    defBonus.value--;
    statPool.value++;
  }
});
pRes.addEventListener("click", () => {
  if (statPool.value != 0) {
    resTemp.value++;
    resCount++;
    defBonus.value++;
    statPool.value--;
  }
});
mInt.addEventListener("click", () => {
  if (intTemp.value != baseInt) {
    intTemp.value--;
    intCount--;
    magBonus.value--;
    mdefBonus.value--;
    statPool.value++;
  }
});
pInt.addEventListener("click", () => {
  if (statPool.value != 0) {
    intTemp.value++;
    intCount++;
    magBonus.value++;
    mdefBonus.value++;
    statPool.value--;
  }
});
//allocating stats
allocater.addEventListener("click", () => {
  fightDragon.disabled = false;
  fightGoblin.disabled = false;
  fightWizard.disabled = false;
  stagePlayer();
  console.log(player);
  //cheat code for presentation to buy everything from the shop
  if (playerName.value === "money") {
    money.value = 999;
  } else {
  }
});

//Battle Buttons
//selecting buttons
const atkButton = document.querySelector(".atkbutton");
atkButton.addEventListener("click", () => {
  if (player.spd > enemy.spd) {
    player.attack(enemy);
    if (enemy.hitpoint <= 0) {
      battleEnd();
    } else {
      enemyAtkChoice();
      if (player.hitpoint <= 0) {
        battleEnd();
      }
    }
  } else {
    enemyAtkChoice();
    if (player.hitpoint <= 0) {
      battleEnd();
    } else {
      player.attack(enemy);
      if (enemy.hitpoint < 1) {
        battleEnd();
      }
    }
  }
});
const magButton = document.querySelector(".magbutton");
magButton.addEventListener("click", () => {
  if (player.spd > enemy.spd) {
    player.magAttack(enemy);
    if (enemy.hitpoint < 1) {
      battleEnd();
    } else {
      enemyAtkChoice();
      if (player.hitpoint < 1) {
        battleEnd();
      }
    }
  } else {
    enemyAtkChoice();
    if (player.hitpoint < 1) {
      battleEnd();
    } else {
      player.magAttack(enemy);
      if (enemy.hitpoint < 1) {
        battleEnd();
      }
    }
  }
});
const healButton = document.querySelector(".healbutton");
healButton.addEventListener("click", () => {
  if (player.spd > enemy.spd) {
    player.heal();
    enemyAtkChoice();
    if (player.hitpoint < 1) {
      battleEnd();
    }
  } else {
    enemyAtkChoice();
    if (player.hitpoint < 1) {
      battleEnd();
    } else {
      player.heal();
    }
  }
});

//Shop
const money = document.getElementById("money");
const buySword = document.getElementById("buysword");
const swordCost = document.getElementById("sw");
buySword.addEventListener("click", () => {
  if (parseInt(money.value) > parseInt(swordCost.value)) {
    money.value -= swordCost.value;
    atk.value = parseInt(atk.value) + 10;
    buySword.disabled = true;
    const sword = document.getElementById("sword");
    sword.value = "Sword: Attack +10";
  }
});
const buyWand = document.getElementById("buywand");
const wandCost = document.getElementById("wa");
buyWand.addEventListener("click", () => {
  if (parseInt(money.value) > parseInt(wandCost.value)) {
    money.value -= wandCost.value;
    mag.value = parseInt(mag.value) + 10;
    buyWand.disabled = true;
    const wand = document.getElementById("wand");
    wand.value = "Magic Wand: M.Attack +10";
  }
});
const buyArmor = document.getElementById("buyarmor");
const armorCost = document.getElementById("ar");
buyArmor.addEventListener("click", () => {
  if (parseInt(money.value) > parseInt(armorCost.value)) {
    money.value -= armorCost.value;
    def.value = parseInt(def.value) + 10;
    buyArmor.disabled = true;
    const armor = document.getElementById("armor");
    armor.value = "Suit of Armor: Defense +10";
  }
});
const buyShield = document.getElementById("buyshield");
const shieldCost = document.getElementById("sh");
buyShield.addEventListener("click", () => {
  if (parseInt(money.value) > parseInt(shieldCost.value)) {
    money.value -= shieldCost.value;
    mdef.value = parseInt(mdef.value) + 10;
    buyShield.disabled = true;
    const shield = document.getElementById("shield");
    shield.value = "Kite Shield: M.Defense +10";
  }
});
const buyFreedom = document.getElementById("buyfreedom");
const freedomCost = document.getElementById("fr");
buyFreedom.addEventListener("click", () => {
  if (parseInt(money.value) > parseInt(freedomCost.value)) {
    money.value -= freedomCost.value;
    buyFreedom.disabled = true;
    alert(
      "Congratulations! You bought your freedom! You win the game! You can still fight enemies if you want."
    );
    const freedom = document.getElementById("freedom");
    freedom.value = "Obtained";
  }
});

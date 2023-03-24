class Character {
  constructor(name, HP, Atk, Mag, Acc, Def, Mdef, Spd) {
    this.name = name;
    this.hp = HP;
    this.atk = Atk;
    this.mag = Mag;
    this.acc = Acc;
    this.def = Def;
    this.mdef = Mdef;
    this.spd = Spd;
    this.money = 0;
    this.sword = false;
    this.wand = false;
    this.armor = false;
    this.shield = false;
  }
  attack(attacker, opponent) {
    if (attacker.acc < Math.random()) {
      alert(`${attack.name} missed!`);
    } else {
      let damage = attacker.atk - opponent.def;
      if (damage < 0) {
        opponent.hp -= 0; //makes sure negative numbers aren't subtracted from opponent's hp
        alert(`${attacker.name} dealt 0 damage to ${opponent.name}!`);
      } else {
        opponent.hp -= damage;
        alert(`${attacker.name} dealt ${damage} damage to ${opponent.name}!`);
        if (opponent.hp < 0) {
          alert(`${opponent.name} was defeated!`);
        }
      }
    }
  }
  magAttack(attacker, opponent) {
    if (attacker.acc < Math.random()) {
      alert(`${attack.name} missed!`);
    } else {
      let damage = attacker.mag - opponent.mdef;
      if (damage < 0) {
        opponent.hp -= 0; //makes sure negative numbers aren't subtracted from opponent's hp
        alert(`${attacker.name} dealt 0 damage to ${opponent.name}!`);
      } else {
        opponent.hp -= damage;
        alert(`${attacker.name} dealt ${damage} damage to ${opponent.name}!`);
        if (opponent.hp < 0) {
          alert(`${opponent.name} was defeated!`);
        }
      }
    }
  }
}

//creating player character
const player = new Character();
console.log(player);

//creating enemies
const fightGoblin = document.querySelector(".fightgob");
fightGoblin.addEventListener("click", () => {
  const goblin = new Character(
    "Goblin",
    randomNumber(3, 11),
    randomNumber(3, 6),
    randomNumber(3, 4),
    accuracyNumber(3, 6),
    randomNumber(3, 5),
    randomNumber(3, 4),
    randomNumber(3, 6)
  );
  // console.log(goblin);
  //staging for battle
  stageEnemy(goblin);
  disableButtons();
});
const fightWizard = document.querySelector(".fightwiz");
fightWizard.addEventListener("click", () => {
  const wizard = new Character(
    "Wizard",
    randomNumber(8, 15),
    randomNumber(3, 6),
    randomNumber(8, 12),
    accuracyNumber(6, 10),
    randomNumber(3, 6),
    randomNumber(8, 12),
    randomNumber(6, 9)
  );
  // console.log(wizard);
  //staging for battle
  stageEnemy(wizard);
  disableButtons();
});
const fightDragon = document.querySelector(".fightdrg");
fightDragon.addEventListener("click", () => {
  const dragon = new Character(
    "Dragon",
    randomNumber(25, 50), //hp
    randomNumber(12, 20), //atk
    randomNumber(12, 20), //mag
    accuracyNumber(9, 11), //acc
    randomNumber(12, 20), //def
    randomNumber(12, 20), //mdef
    randomNumber(12, 20) //spd
  );
  // console.log(dragon);
  //staging for battle
  stageEnemy(dragon);
  disableButtons();
});
//enemy functions
function stageEnemy(enemy) {
  const ename = document.querySelector(".enemyname");
  const pic = document.querySelector(".e-pic"); //changes enemy picture
  const enemyHP = document.querySelector(".foehp");
  const enemyAtk = document.querySelector(".foeatk");
  const enemyMag = document.querySelector(".foemag");
  const enemyAcc = document.querySelector(".foeacc");
  const enemyDef = document.querySelector(".foedef");
  const enemyMdef = document.querySelector(".foemdef");
  const enemySpd = document.querySelector(".foespd");
  ename.innerHTML = enemy.name;
  enemyHP.value = enemy.hp;
  enemyAtk.value = enemy.atk;
  enemyMag.value = enemy.mag;
  enemyAcc.value = enemy.acc;
  enemyDef.value = enemy.def;
  enemyMdef.value = enemy.mdef;
  enemySpd.value = enemy.spd;
}
function disableButtons() {
  allocater.disabled = true;
  fightDragon.disabled = true;
  fightGoblin.disabled = true;
  fightWizard.disabled = true;
}
function enableButtons() {
  allocater.disabled = false;
  fightDragon.disabled = false;
  fightGoblin.disabled = false;
  fightWizard.disabled = false;
}
//Enemy Stat generators
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
function accuracyNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min) / 10;
}

//staging Player for battle
const pname = document.querySelector(".playername");
const pic = document.querySelector(".p-pic"); //changes enemy picture
const bHP = document.querySelector(".hp2");
const bAtk = document.querySelector(".atk2");
const bMag = document.querySelector(".mag2");
const bAcc = document.querySelector(".acc2");
const bDef = document.querySelector(".def2");
const bMdef = document.querySelector(".mdef2");
const bSpd = document.querySelector(".spd2");
function stagePlayer(player) {
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
  player.name = playerName.value;
  // console.log("Name: " + player.name);
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
  player.atk = atk.value;
  player.mag = mag.value;
  player.acc = 5 / 10 + acc.value / 100;
  player.def = def.value;
  player.mdef = mdef.value;
  player.spd = spd.value;
  stagePlayer(player);
  console.log(player);
});

//Battle Buttons
//selecting buttons
const atkButton = document.querySelector("atkbutton");
atkButton.addEventListener("click", () => {});
const magButton = document.querySelector("magbutton");
magButton.addEventListener("click", () => {});
const healButton = document.querySelector("healbutton");
healButton.addEventListener("click", () => {});

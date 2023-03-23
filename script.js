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
  attack(opponent) {}
  magattack(opponent) {}
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
  console.log(goblin);
  //staging for battle
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
  console.log(wizard);
  //staging for battle
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
  console.log(dragon);
  //staging for battle
  enemyStats.innerHTML = `Name:${dragon.name}
  `;
});

const enemyStats = document.querySelector(".enemystats");

//Enemy Stat generators
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
function accuracyNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min) / 10;
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
//menu2
let baseHp = 0;
let baseAtk = 0;
let baseMag = 0; //useless variables?
let baseAcc = 0;
let baseDef = 0;
let baseMdef = 0;
let baseSpd = 0;
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
    vitTemp.removeAttribute("readonly");
    statPool.removeAttribute("readonly");
    hpBonus.removeAttribute("readonly");
    vitTemp.value--;
    vitCount--;
    hpBonus.value = parseInt(hpBonus.value) - 3;
    statPool.value++;
    vitTemp.setAttribute("readonly", true);
    statPool.setAttribute("readonly", true);
    hpBonus.setAttribute("readonly", true);
  }
});
pVit.addEventListener("click", () => {
  if (statPool.value != 0) {
    vitTemp.removeAttribute("readonly");
    statPool.removeAttribute("readonly");
    hpBonus.removeAttribute("readonly");
    vitTemp.value++;
    vitCount++;
    hpBonus.value++;
    hpBonus.value++;
    hpBonus.value++;
    statPool.value--;
    vitTemp.setAttribute("readonly", true);
    statPool.setAttribute("readonly", true);
    hpBonus.setAttribute("readonly", true);
  }
});
mStr.addEventListener("click", () => {
  if (strTemp.value != baseStr) {
    strTemp.removeAttribute("readonly");
    statPool.removeAttribute("readonly");
    strTemp.value--;
    strCount--;
    atkBonus.value--;
    statPool.value++;
    strTemp.setAttribute("readonly", true);
    statPool.setAttribute("readonly", true);
  }
});
pStr.addEventListener("click", () => {
  if (statPool.value != 0) {
    strTemp.removeAttribute("readonly");
    statPool.removeAttribute("readonly");
    strTemp.value++;
    strCount++;
    atkBonus.value++;
    statPool.value--;
    strTemp.setAttribute("readonly", true);
    statPool.setAttribute("readonly", true);
  }
});
mDex.addEventListener("click", () => {
  if (dexTemp.value != baseDex) {
    dexTemp.removeAttribute("readonly");
    statPool.removeAttribute("readonly");
    dexTemp.value--;
    dexCount--;
    spdBonus.value--;
    accBonus.value--;
    statPool.value++;
    dexTemp.setAttribute("readonly", true);
    statPool.setAttribute("readonly", true);
  }
});
pDex.addEventListener("click", () => {
  if (statPool.value != 0) {
    dexTemp.removeAttribute("readonly");
    statPool.removeAttribute("readonly");
    dexTemp.value++;
    dexCount++;
    spdBonus.value++;
    accBonus.value++;
    statPool.value--;
    dexTemp.setAttribute("readonly", true);
    statPool.setAttribute("readonly", true);
  }
});
mRes.addEventListener("click", () => {
  if (resTemp.value != baseRes) {
    resTemp.removeAttribute("readonly");
    statPool.removeAttribute("readonly");
    resTemp.value--;
    resCount--;
    defBonus.value--;
    statPool.value++;
    resTemp.setAttribute("readonly", true);
    statPool.setAttribute("readonly", true);
  }
});
pRes.addEventListener("click", () => {
  if (statPool.value != 0) {
    resTemp.removeAttribute("readonly");
    statPool.removeAttribute("readonly");
    resTemp.value++;
    resCount++;
    defBonus.value++;
    statPool.value--;
    resTemp.setAttribute("readonly", true);
    statPool.setAttribute("readonly", true);
  }
});
mInt.addEventListener("click", () => {
  if (intTemp.value != baseInt) {
    intTemp.removeAttribute("readonly");
    statPool.removeAttribute("readonly");
    intTemp.value--;
    intCount--;
    magBonus.value--;
    mdefBonus.value--;
    statPool.value++;
    intTemp.setAttribute("readonly", true);
    statPool.setAttribute("readonly", true);
  }
});
pInt.addEventListener("click", () => {
  if (statPool.value != 0) {
    intTemp.removeAttribute("readonly");
    statPool.removeAttribute("readonly");
    intTemp.value++;
    intCount++;
    magBonus.value++;
    mdefBonus.value++;
    statPool.value--;
    intTemp.setAttribute("readonly", true);
    statPool.setAttribute("readonly", true);
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
  player.acc = acc.value;
  player.def = def.value;
  player.mdef = mdef.value;
  player.spd = spd.value;
  console.log(player);
});

class Character {
  constructor(name, HP, Atk, Def, Spd, Acc) {
    this.name = name;
    this.hp = HP;
    this.atk = Atk;
    this.def = Def;
    this.spd = Spd;
    this.acc = Acc;
  }
}

//Enemy Stat generators
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
function accuracyNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min) / 10;
}

//Stat Screen
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
let conCount = 0;
let baseCon = 1;
//menu2
let baseHp = 0;
let baseAtk = 0;
let baseMag = 0;
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
//menu2
const hpBonus = document.querySelector(".hpbonus");
const atkBonus = document.querySelector(".atkbonus");
const magBonus = document.querySelector(".magbonus");
const accBonus = document.querySelector(".accbonus");
const defBonus = document.querySelector(".defbonus");
const mdefBonus = document.querySelector(".mdefbonus");
const spdBonus = document.querySelector(".spdbonus");
//clicking on buttons
mVit.addEventListener("click", () => {
  if (vitTemp.value != baseVit) {
    vitTemp.removeAttribute("readonly");
    statPool.removeAttribute("readonly");
    hpBonus.removeAttribute("readonly");
    vitTemp.value--;
    vitCount--;
    hpBonus.value--;
    hpBonus.value--;
    hpBonus.value--;
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
    statPool.value--;
    resTemp.setAttribute("readonly", true);
    statPool.setAttribute("readonly", true);
  }
});
mInt.addEventListener("click", () => {
  if (intTemp.value != baseCon) {
    intTemp.removeAttribute("readonly");
    statPool.removeAttribute("readonly");
    intTemp.value--;
    conCount--;
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
    conCount++;
    statPool.value--;
    intTemp.setAttribute("readonly", true);
    statPool.setAttribute("readonly", true);
  }
});

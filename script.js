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

//button click

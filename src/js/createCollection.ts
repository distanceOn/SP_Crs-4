const BT = require("../../static/imgs/BT.svg") as string;
const CT = require("../../static/imgs/CT.svg") as string;
const PT = require("../../static/imgs/PT.svg") as string;
const KT = require("../../static/imgs/KT.svg") as string;
const BK = require("../../static/imgs/BK.svg") as string;
const CK = require("../../static/imgs/CK.svg") as string;
const PK = require("../../static/imgs/PK.svg") as string;
const KK = require("../../static/imgs/KK.svg") as string;
const BD = require("../../static/imgs/BD.svg") as string;
const CD = require("../../static/imgs/CD.svg") as string;
const PD = require("../../static/imgs/PD.svg") as string;
const KD = require("../../static/imgs/KD.svg") as string;
const BV = require("../../static/imgs/BV.svg") as string;
const CV = require("../../static/imgs/CV.svg") as string;
const PV = require("../../static/imgs/PV.svg") as string;
const KV = require("../../static/imgs/KV.svg") as string;
const B10 = require("../../static/imgs/B10.svg") as string;
const C10 = require("../../static/imgs/C10.svg") as string;
const P10 = require("../../static/imgs/P10.svg") as string;
const K10 = require("../../static/imgs/K10.svg") as string;
const B9 = require("../../static/imgs/B9.svg") as string;
const C9 = require("../../static/imgs/C9.svg") as string;
const P9 = require("../../static/imgs/P9.svg") as string;
const K9 = require("../../static/imgs/K9.svg") as string;
const B8 = require("../../static/imgs/B8.svg") as string;
const C8 = require("../../static/imgs/C8.svg") as string;
const P8 = require("../../static/imgs/P8.svg") as string;
const K8 = require("../../static/imgs/K8.svg") as string;
const B7 = require("../../static/imgs/B7.svg") as string;
const C7 = require("../../static/imgs/C7.svg") as string;
const P7 = require("../../static/imgs/P7.svg") as string;
const K7 = require("../../static/imgs/K7.svg") as string;
const B6 = require("../../static/imgs/B6.svg") as string;
const C6 = require("../../static/imgs/C6.svg") as string;
const P6 = require("../../static/imgs/P6.svg") as string;
const K6 = require("../../static/imgs/K6.svg") as string;

const imgs: Array<string> = [
  BT,
  CT,
  PT,
  KT,
  BK,
  CK,
  PK,
  KK,
  BD,
  CD,
  PD,
  KD,
  BV,
  CV,
  PV,
  KV,
  B10,
  C10,
  P10,
  K10,
  B9,
  C9,
  P9,
  K9,
  B8,
  C8,
  P8,
  K8,
  B7,
  C7,
  P7,
  K7,
  B6,
  C6,
  P6,
  K6,
];

export function createCollection(originalAmount) {
  imgs.sort(() => Math.random() - 0.5);
  console.log(imgs);
  let original: Array<string> = [];
  for (let i = 0; i < originalAmount; i++) {
    original.push(imgs[i]);
  }
  original = original.concat(original);
  original.sort(() => Math.random() - 0.5);
  console.log(original);
  return original;
}

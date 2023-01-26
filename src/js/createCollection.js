import BT from "../../static/imgs/BT.svg";
import CT from "../../static/imgs/CT.svg";
import PT from "../../static/imgs/PT.svg";
import KT from "../../static/imgs/KT.svg";
import BK from "../../static/imgs/BK.svg";
import CK from "../../static/imgs/CK.svg";
import PK from "../../static/imgs/PK.svg";
import KK from "../../static/imgs/KK.svg";
import BD from "../../static/imgs/BD.svg";
import CD from "../../static/imgs/CD.svg";
import PD from "../../static/imgs/PD.svg";
import KD from "../../static/imgs/KD.svg";
import BV from "../../static/imgs/BV.svg";
import CV from "../../static/imgs/CV.svg";
import PV from "../../static/imgs/PV.svg";
import KV from "../../static/imgs/KV.svg";
import B10 from "../../static/imgs/B10.svg";
import C10 from "../../static/imgs/C10.svg";
import P10 from "../../static/imgs/P10.svg";
import K10 from "../../static/imgs/K10.svg";
import B9 from "../../static/imgs/B9.svg";
import C9 from "../../static/imgs/C9.svg";
import P9 from "../../static/imgs/P9.svg";
import K9 from "../../static/imgs/K9.svg";
import B8 from "../../static/imgs/B8.svg";
import C8 from "../../static/imgs/C8.svg";
import P8 from "../../static/imgs/P8.svg";
import K8 from "../../static/imgs/K8.svg";
import B7 from "../../static/imgs/B7.svg";
import C7 from "../../static/imgs/C7.svg";
import P7 from "../../static/imgs/P7.svg";
import K7 from "../../static/imgs/K7.svg";
import B6 from "../../static/imgs/B6.svg";
import C6 from "../../static/imgs/C6.svg";
import P6 from "../../static/imgs/P6.svg";
import K6 from "../../static/imgs/K6.svg";

const imgs = [
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
  let original = [];
  for (let i = 0; i < originalAmount; i++) {
    original.push(imgs[i]);
  }
  original = original.concat(original);
  original.sort(() => Math.random() - 0.5);
  console.log(original);
  return original;
}

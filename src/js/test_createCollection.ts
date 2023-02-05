// this function is an absolutely exact copy of function from '../js/createCollection.ts'

const imgs = [
  "../../static/imgs/BT.svg",
  "../../static/imgs/CT.svg",
  "../../static/imgs/PT.svg",
  "../../static/imgs/KT.svg",
  "../../static/imgs/BK.svg",
  "../../static/imgs/CK.svg",
  "../../static/imgs/PK.svg",
  "../../static/imgs/KK.svg",
  "../../static/imgs/BD.svg",
  "../../static/imgs/CD.svg",
  "../../static/imgs/PD.svg",
  "../../static/imgs/KD.svg",
  "../../static/imgs/BV.svg",
  "../../static/imgs/CV.svg",
  "../../static/imgs/PV.svg",
  "../../static/imgs/KV.svg",
  "../../static/imgs/B10.svg",
  "../../static/imgs/C10.svg",
  "../../static/imgs/P10.svg",
  "../../static/imgs/K10.svg",
  "../../static/imgs/B9.svg",
  "../../static/imgs/C9.svg",
  "../../static/imgs/P9.svg",
  "../../static/imgs/K9.svg",
  "../../static/imgs/B8.svg",
  "../../static/imgs/C8.svg",
  "../../static/imgs/P8.svg",
  "../../static/imgs/K8.svg",
  "../../static/imgs/B7.svg",
  "../../static/imgs/C7.svg",
  "../../static/imgs/P7.svg",
  "../../static/imgs/K7.svg",
  "../../static/imgs/B6.svg",
  "../../static/imgs/C6.svg",
  "../../static/imgs/P6.svg",
  "../../static/imgs/K6.svg",
];

export function createTestCollection(originalAmount) {
  imgs.sort(() => Math.random() - 0.5);
  console.log(imgs);
  let original: Array<string> = [];
  for (let i = 0; i < originalAmount; i++) {
    original.push(imgs[i]);
  }
  original = original.concat(original);
  original.sort(() => Math.random() - 0.5);
  console.log(original);
  console.log(original.length);
  return original;
}

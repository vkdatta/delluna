export const name="question-mark-bold";
export const id="dl_f5bc536a2c90420a91d8";
export const url=new URL("../icons/question-mark-bold.svg?v=581a1e137b79f012e0675193fbcdb406cab6d0803fa4580a6804cfedb04b5d0a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

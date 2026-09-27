export const name="caret-circle-up-bold";
export const id="dl_1ff1cff2824949b19b2c";
export const url=new URL("../icons/caret-circle-up-bold.svg?v=6d03fa5e37f6673ec8ed95a17303e3b0d5b201013d097c284ea8720301cf68a7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="acute";
export const id="dl_e4500ec1c972de2df9e7";
export const url=new URL("../icons/acute.svg?v=6aa24880084537630aa76bd4d0734f1988e4c30e79153a0d220528952e1c0b70",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

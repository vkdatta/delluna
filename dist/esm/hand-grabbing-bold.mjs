export const name="hand-grabbing-bold";
export const id="dl_d4efea4c3da24982acbd";
export const url=new URL("../icons/hand-grabbing-bold.svg?v=6304ebb420306735baf4131a3c57724e738763ec15e65d6ccf6d97406e684946",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

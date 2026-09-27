export const name="water_bottle";
export const id="dl_fde9ddca1cad61a27a0c";
export const url=new URL("../icons/water_bottle.svg?v=0f8bfb8065c0f458a9b0b7b0eb3dbf334740507cac156a64e1e92b96436cb1a6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

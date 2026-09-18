export const name="oxygen_saturation-fill";
export const id="dl_b3dda54983ef41ca9cf9";
export const url=new URL("../icons/oxygen_saturation-fill.svg?v=c9a48a3c775c604677da4a1583310908a9f6c6961da641a97f600b1517b0e63a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

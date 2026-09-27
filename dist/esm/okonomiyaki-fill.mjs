export const name="okonomiyaki-fill";
export const id="dl_bf2896064cc12f6090d8";
export const url=new URL("../icons/okonomiyaki-fill.svg?v=4888590023781db5e4600f68d4a387066fa4bdef2fe4d2634837cc2df0efb981",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

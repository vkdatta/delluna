export const name="text-h-five-fill";
export const id="dl_074a2ade6fd0307f6b11";
export const url=new URL("../icons/text-h-five-fill.svg?v=0a53ddd0aa722b2c80f11a3a10c25a6457bf451b6f6e80eec04bd1905638bb2b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="masks-fill";
export const id="dl_20c63d7747bc2ca1f6ad";
export const url=new URL("../icons/masks-fill.svg?v=d3a10c6873efdd5a02c48d5f3d64868536f049e695b17cbbd4b819aeb96124a5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="crop_square-fill";
export const id="dl_de85b1470b460e43db12";
export const url=new URL("../icons/crop_square-fill.svg?v=bfc2a4fb2ccc5b5991ba479bbf4304f1002009cdd7e9d9494c6905bc26d8705a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

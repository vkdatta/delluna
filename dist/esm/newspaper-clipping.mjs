export const name="newspaper-clipping";
export const id="dl_979895a0a7dd49eb91a8";
export const url=new URL("../icons/newspaper-clipping.svg?v=04d56b5621b264d46ecc46fa0c12c892aa20fc5a1d2818d3b77e7feb4ab1969b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

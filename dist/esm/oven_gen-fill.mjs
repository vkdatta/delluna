export const name="oven_gen-fill";
export const id="dl_ce72851cda37dc7c8118";
export const url=new URL("../icons/oven_gen-fill.svg?v=dc12b1f01230c8fc41cd6e55f2ff090b631b2f70cd99e37651cc17dcff77b864",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

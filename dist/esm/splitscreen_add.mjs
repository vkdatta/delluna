export const name="splitscreen_add";
export const id="dl_d13586dda930a6bf7eb7";
export const url=new URL("../icons/splitscreen_add.svg?v=00335815e0901481ea8bbfe00ea3aadbbe8fb578bbbbb2fe78681b53a2fccbdb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

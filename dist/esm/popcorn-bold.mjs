export const name="popcorn-bold";
export const id="dl_b4be4fae1fa748a18577";
export const url=new URL("../icons/popcorn-bold.svg?v=7558d891c73401aaa384e7fe1e0421354b303b498000e9a59d51eb4668b603a8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

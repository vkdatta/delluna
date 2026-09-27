export const name="ulna_radius-fill";
export const id="dl_97d6ee97e6b4911f0fce";
export const url=new URL("../icons/ulna_radius-fill.svg?v=ab6ba59d2017c13fe8f249b8b566ce738988321d17b640a3f59ba7daf22c367b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

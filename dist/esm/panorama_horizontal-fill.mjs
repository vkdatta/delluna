export const name="panorama_horizontal-fill";
export const id="dl_d98556764ce0fe91278c";
export const url=new URL("../icons/panorama_horizontal-fill.svg?v=b26014655c6c258974e88b8642a7b50604e3e4ac149c51bf2ab351b1dfebe71b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

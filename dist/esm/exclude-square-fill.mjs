export const name="exclude-square-fill";
export const id="dl_f99eef81d09d4081841c";
export const url=new URL("../icons/exclude-square-fill.svg?v=64f63236539f6f3640b8216e2f39123eb1e7f6e2559b690e9c9960ec3f2b14f4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

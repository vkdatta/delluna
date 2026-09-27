export const name="memory-fill";
export const id="dl_3d811b1b8c0c6f1fac87";
export const url=new URL("../icons/memory-fill.svg?v=7a859035a55dea3c68c0cffe179ffbe0759fb4d159ae17e04f8201b56553e3f8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

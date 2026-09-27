export const name="tree-structure";
export const id="dl_08372874754b34eb6ec7";
export const url=new URL("../icons/tree-structure.svg?v=4c8fe4029803f476482a42a5c8725fc55914b0074044ab82f4f6ca307afbea06",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

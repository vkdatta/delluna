export const name="cell-signal-full-duotone";
export const id="dl_3aef8aa5101745828bbc";
export const url=new URL("../icons/cell-signal-full-duotone.svg?v=60c40477c8f706212dec41aa66fde6c6b9d57042188dfdc6c0d36d61fe98d329",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

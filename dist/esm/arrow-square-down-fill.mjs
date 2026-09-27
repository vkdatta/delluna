export const name="arrow-square-down-fill";
export const id="dl_175bdf426e404ffda34a";
export const url=new URL("../icons/arrow-square-down-fill.svg?v=7f15a26c9518957ffb6950b56a7d7eb94cb0a8ce13a95e6d7da365fb99648e57",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

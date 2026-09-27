export const name="grid_3x3_off-fill";
export const id="dl_601701c59c71547dc5bb";
export const url=new URL("../icons/grid_3x3_off-fill.svg?v=2000ee2341878bb442f7c81d78cd47dfb0f1a56f15922a9d8b2d6dcd0438acbf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

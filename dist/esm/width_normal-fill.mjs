export const name="width_normal-fill";
export const id="dl_b965123b912075891efd";
export const url=new URL("../icons/width_normal-fill.svg?v=946de15a89b0eb1be650dc4c8fac2f34bfbd5a5ee6571811afcb95ceb4948847",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

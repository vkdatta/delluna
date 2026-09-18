export const name="arrow_warm_up-fill";
export const id="dl_8f15f65e59c649f0ae9b";
export const url=new URL("../icons/arrow_warm_up-fill.svg?v=995df578b57039056341f66dd12c490d328b23a8810c25a1b2f4ce0fe8664348",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

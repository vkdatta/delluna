export const name="toggle_off-fill";
export const id="dl_2cdd1bc3faf9a748a597";
export const url=new URL("../icons/toggle_off-fill.svg?v=f81748825ad6c806fc825ce3ffa26c25cbd15c2075414a29a3c6d10867fe370c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

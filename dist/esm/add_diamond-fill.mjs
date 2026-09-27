export const name="add_diamond-fill";
export const id="dl_591480a377201040e4ad";
export const url=new URL("../icons/add_diamond-fill.svg?v=887f1ab713d9d6b48476a381751e04bd3965b8d6113449ee9c2115dca3d48c0e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

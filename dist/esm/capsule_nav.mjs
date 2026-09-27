export const name="capsule_nav";
export const id="dl_b9e9f80916cd41f89578";
export const url=new URL("../icons/capsule_nav.svg?v=e5204d750aee9989ba19f6c5d571874513d2b3754b0e184824adfb251741482f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

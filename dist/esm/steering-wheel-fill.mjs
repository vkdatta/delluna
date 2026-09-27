export const name="steering-wheel-fill";
export const id="dl_452a3baf0720f9d13852";
export const url=new URL("../icons/steering-wheel-fill.svg?v=822fff6787c2c5ccba2c60a110f9bdc6f0fed27b0e850033e5c3ccda4f0f95e2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

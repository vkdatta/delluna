export const name="ophthalmology";
export const id="dl_1a2c617f532f4de49bfc";
export const url=new URL("../icons/O/ophthalmology.svg?v=14ee75e29fcfe9b911eb1f4151e2c2a9809cd1713a6d4429cfb992a01d1a62d2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

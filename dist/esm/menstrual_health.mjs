export const name="menstrual_health";
export const id="dl_c6654b83131f4a7ca3d2";
export const url=new URL("../icons/M/menstrual_health.svg?v=f4e992492abf957c44078939fac00a95284e1da7e7edb42d87df00d8840012f5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="chart-pie-slice-light";
export const id="dl_abade74aabb04dc4a007";
export const url=new URL("../icons/chart-pie-slice-light.svg?v=12de30895d7d8b76fffc500c32999a4d903f2dc230f23c08f02598d5906d2b26",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

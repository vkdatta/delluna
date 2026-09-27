export const name="sidebar-fill";
export const id="dl_b24f77e72cfd0a34a5f3";
export const url=new URL("../icons/sidebar-fill.svg?v=3893d010f572820799853642faa10e21f1527b2c6be1c8177572ff6d94d0dadb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

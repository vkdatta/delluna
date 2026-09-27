export const name="chart-pie-slice-light";
export const id="dl_abade74aabb04dc4a007";
export const url=new URL("../icons/chart-pie-slice-light.svg?v=64f928165de4dc556b083e88b76bd96e93a2b993819eb4278d69ca2cc980864a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

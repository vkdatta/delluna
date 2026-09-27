export const name="chart-pie-duotone";
export const id="dl_e4d800d68eee449db1a2";
export const url=new URL("../icons/chart-pie-duotone.svg?v=8157814719ba248137c9ab4ac58059da0f8cace28a7c706fcb3e95cc237119ad",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

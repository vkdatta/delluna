export const name="single_bed-fill";
export const id="dl_5e84ee356f500eaaed4b";
export const url=new URL("../icons/single_bed-fill.svg?v=e8fa84960d8afc943a583a381648eba7dbded56c13f96ba9a0aa28b8f73fdd12",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

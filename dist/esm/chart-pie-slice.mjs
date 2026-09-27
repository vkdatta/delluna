export const name="chart-pie-slice";
export const id="dl_81d152f5783d4e36b5c0";
export const url=new URL("../icons/chart-pie-slice.svg?v=3ffbe817cad8edb506a0c9879c65d5050c6f844f5bdb8c9c09c4a31f5f500967",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="chart-bar-horizontal";
export const id="dl_648bcda44586423282c4";
export const url=new URL("../icons/chart-bar-horizontal.svg?v=ba41d4570a66342e60f049df0ff76eb415513625b1d3ae7e937544ec1130a84a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

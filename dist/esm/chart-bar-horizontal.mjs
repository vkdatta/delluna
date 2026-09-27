export const name="chart-bar-horizontal";
export const id="dl_648bcda44586423282c4";
export const url=new URL("../icons/chart-bar-horizontal.svg?v=3baf7c766800181ab93ad9dc9e93a75bb29f405f4a9f510973171e31d961bf2e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

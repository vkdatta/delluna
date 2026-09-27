export const name="chart-polar-fill";
export const id="dl_f2d1788816224ff1a28d";
export const url=new URL("../icons/chart-polar-fill.svg?v=01136225345947c9755926f141c52c357464d121ea7a9aa3dbcd6c483a6a7bad",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

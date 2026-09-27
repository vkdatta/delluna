export const name="chart-polar-fill";
export const id="dl_f2d1788816224ff1a28d";
export const url=new URL("../icons/chart-polar-fill.svg?v=f6f5241b3889653101a2c293927c9dfb4dc7e8cb6498e5f3365cc1926bf5a50a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

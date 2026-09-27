export const name="cable_car-fill";
export const id="dl_e7436ec269281c623512";
export const url=new URL("../icons/cable_car-fill.svg?v=49dc4e8cc7c04eab98e53ca4e4ae1fe7c746970019be1a33abb6818b9ce49eb7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

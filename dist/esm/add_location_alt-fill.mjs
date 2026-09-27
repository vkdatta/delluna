export const name="add_location_alt-fill";
export const id="dl_36050d24cf6840e633fe";
export const url=new URL("../icons/add_location_alt-fill.svg?v=b6aa61334a4f8100a8aae849ca68a21b14020c8ee4e9247773bf3d3e473b7f5d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

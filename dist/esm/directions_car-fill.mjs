export const name="directions_car-fill";
export const id="dl_734df67af4b74dbe919b";
export const url=new URL("../icons/D/directions_car-fill.svg?v=e5ca43243cd304a2d6a3aeddae78ae217eac06dd1ae9df6a7f7161353a8f8d4a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

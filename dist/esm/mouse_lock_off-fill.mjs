export const name="mouse_lock_off-fill";
export const id="dl_3be742aa43d742e8913f";
export const url=new URL("../icons/M/mouse_lock_off-fill.svg?v=2fcb7e3f9162e7b68dcfeb616c9cbe26dc637166897975ff09956c6c8ebb0639",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

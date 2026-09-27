export const name="pedal_bike-fill";
export const id="dl_9faa13dda72da6eb85b3";
export const url=new URL("../icons/pedal_bike-fill.svg?v=06a66f141d22ba837901cfd526ce66bbf344d2102044073f2be699d194b3a802",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

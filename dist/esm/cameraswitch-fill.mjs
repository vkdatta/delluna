export const name="cameraswitch-fill";
export const id="dl_ab1bd7a469bf0aa1846d";
export const url=new URL("../icons/cameraswitch-fill.svg?v=105079d682df21140dda7a4e54e05351f3a2fcfae88943151afeff14d8b274ba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

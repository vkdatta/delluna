export const name="whatsapp-logo-thin";
export const id="dl_5c964994ff7f489bbe15";
export const url=new URL("../icons/W/whatsapp-logo-thin.svg?v=e14c1485c95e8c021b227e02888a159422c44478350a5739f7fcbb1e22557eba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

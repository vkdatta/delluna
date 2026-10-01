export const name="volleyball-duotone";
export const id="dl_cc17c00e65a876ca390f";
export const url=new URL("../icons/volleyball-duotone.svg?v=c2c6f5bcd6a1dc5cc3ecef9c7a4df268a997a5c4bf31bf7ce0b6e0b8031466b2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

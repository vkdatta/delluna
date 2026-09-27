export const name="phone-incoming-fill";
export const id="dl_d7e56956c3944a8f8ae6";
export const url=new URL("../icons/phone-incoming-fill.svg?v=d1aeb6743e4bf917382d2bcd5e13e9aec3fd615212894f931c5476de7a56c533",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="medical_services-fill";
export const id="dl_a9e597754ebe91515831";
export const url=new URL("../icons/medical_services-fill.svg?v=fe726ef9e068b2604069ed1c90321915deb857b1f71f2f8465df8ee03c92399b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

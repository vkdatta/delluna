export const name="arrow-circle-right-light";
export const id="dl_1baff6154ff04e749f1f";
export const url=new URL("../icons/arrow-circle-right-light.svg?v=9695ab07465add5aae292a690f71a9ae4848e24240c11ffe0b954a690c883036",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

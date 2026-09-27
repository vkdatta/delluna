export const name="mobile_charge";
export const id="dl_63ded5505052748d902d";
export const url=new URL("../icons/mobile_charge.svg?v=581a7c69db6e62bf39bac083790a87ac82fcfce45cade312a670a8acb357282d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

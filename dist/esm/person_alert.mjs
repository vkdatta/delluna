export const name="person_alert";
export const id="dl_6094cf69d85d4ddab90f";
export const url=new URL("../icons/person_alert.svg?v=5e99e030f2c68c390f634b59891f968dded763b7cddf37cb1203794bdc3233ba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

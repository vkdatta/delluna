export const name="zone_person_alert-fill";
export const id="dl_8bf456055437bfa257d5";
export const url=new URL("../icons/zone_person_alert-fill.svg?v=c22a1510cf2ac836bda36be37787165ac6002ae7ef187737b79a431d11138811",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

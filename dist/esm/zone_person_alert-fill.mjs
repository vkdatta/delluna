export const name="zone_person_alert-fill";
export const id="dl_86693d59140e1d741d37";
export const url=new URL("../icons/zone_person_alert-fill.svg?v=b7b72bfdf4dce57af1a6d348c2193324da6512b688aecdbe82f5d9f96964aa7f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

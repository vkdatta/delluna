export const name="zone_person_alert-fill";
export const id="dl_ecc97b9ee9b78ffaa1f7";
export const url=new URL("../icons/zone_person_alert-fill.svg?v=ff43d3cbe3ef27d30e050238f0ae13ba3e94a47c44005b1eac0cac88e2c8108f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

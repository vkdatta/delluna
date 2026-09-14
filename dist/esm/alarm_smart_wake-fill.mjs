export const name="alarm_smart_wake-fill";
export const id="dl_39980d6990134d0ebbf9";
export const url=new URL("../icons/A/alarm_smart_wake-fill.svg?v=f95649e69afb8d96b665b3ff8b1db0dd98a45839531ede68bff6de6838bdd133",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

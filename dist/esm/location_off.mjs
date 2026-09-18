export const name="location_off";
export const id="dl_67dbe8366644447e9ddf";
export const url=new URL("../icons/location_off.svg?v=f70df60d7b36997e2aa4c077e793aa8a4274c7c3ed5cedebedd6a5627dd0074b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

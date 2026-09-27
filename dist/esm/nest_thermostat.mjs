export const name="nest_thermostat";
export const id="dl_ccdaaa56a2d7c1367cdc";
export const url=new URL("../icons/nest_thermostat.svg?v=952e6c7aa8da808c9e0eae79a8aba37f58799aff58de91878de007ce5cbdd0c4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="nest_thermostat_zirconium_eu";
export const id="dl_314c925522c54f24bafb";
export const url=new URL("../icons/nest_thermostat_zirconium_eu.svg?v=8e060c1fa5aa2507ab91d45acd3e961303a24e74923cdbfdef0960fe8626ba8c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="nest_thermostat_gen_3-fill";
export const id="dl_ecf22f2f721e4600a549";
export const url=new URL("../icons/nest_thermostat_gen_3-fill.svg?v=fbaabc95261845fe4da5f16575fd90d183aa8dcd054a7554246709d813160531",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

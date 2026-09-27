export const name="nest_thermostat-fill";
export const id="dl_d7f9bb1fdf1a278f6462";
export const url=new URL("../icons/nest_thermostat-fill.svg?v=39031752271ea1a6fd2453e7311f8d61ba845b7cb119bb736defed781124841a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

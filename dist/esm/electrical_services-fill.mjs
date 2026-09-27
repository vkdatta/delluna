export const name="electrical_services-fill";
export const id="dl_599f3327efb30bf477d7";
export const url=new URL("../icons/electrical_services-fill.svg?v=9750a3fad21af8503fdc1a712e3ed6489f73abf889d422cad1a02ef0f1f166af",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

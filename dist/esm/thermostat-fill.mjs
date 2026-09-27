export const name="thermostat-fill";
export const id="dl_98a19b1ee07c6f8375a1";
export const url=new URL("../icons/thermostat-fill.svg?v=5fd4e56308b1c1c20002e5496a90f2a4549ac1b08874d626ce2990f53292e7bc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

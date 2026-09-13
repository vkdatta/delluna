export const name="18mp-fill";
export const id="dl_d9998948d44b48ff8a09";
export const url=new URL("../icons/1/18mp-fill.svg?v=3bed7175480894aa40143283edf24d8ef76e2e596243da1cb4d7d40a3258fbcc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

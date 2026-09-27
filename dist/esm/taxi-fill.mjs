export const name="taxi-fill";
export const id="dl_fe3eff9b146c40b692f1";
export const url=new URL("../icons/taxi-fill.svg?v=72dadeacb60918935343e8efc9bba2c62271c3f7223c2b1d020659e5f532ec6c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

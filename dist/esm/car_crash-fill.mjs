export const name="car_crash-fill";
export const id="dl_1e73cda4fbd0491f8d27";
export const url=new URL("../icons/car_crash-fill.svg?v=3999553d22d2dc9d49a4fe8821bbdcb5a8587d86c335e62a8001800badec12ca",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

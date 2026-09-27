export const name="reset_shutter_speed-fill";
export const id="dl_0e28696907b910a090dc";
export const url=new URL("../icons/reset_shutter_speed-fill.svg?v=5a6d4e0c94b2fb22c552000bca354fac8259d19d670a0b6f3ff83e11beba8287",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="car_lock-fill";
export const id="dl_0d29efe2a29236af95cd";
export const url=new URL("../icons/car_lock-fill.svg?v=bdeacf10c88e6339985f0f1df817f8e9fc4118b455dcb511ee13601ee9af84ac",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

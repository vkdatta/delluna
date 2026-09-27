export const name="farsight_digital";
export const id="dl_cb0f16ddc3f7b2556172";
export const url=new URL("../icons/farsight_digital.svg?v=5301a9ca79e3c49b41a058d283cf5e71d5462e82d5e2aec6c7ca131026b14bb6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

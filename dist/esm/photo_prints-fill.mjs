export const name="photo_prints-fill";
export const id="dl_a46dec93b01144999fff";
export const url=new URL("../icons/photo_prints-fill.svg?v=31c31190531e5f0770a8951bd4f53493436e84958d5770670fa5c1ae01419d37",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="glucose-fill";
export const id="dl_c4cafad084debf5c3d57";
export const url=new URL("../icons/glucose-fill.svg?v=d8de3634b7dc317775cff4811423dfaf48f09d58af50cadd2497fda2200f74db",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

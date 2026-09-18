export const name="shift_lock-fill";
export const id="dl_5322a33845c2487f987a";
export const url=new URL("../icons/shift_lock-fill.svg?v=cf4420065d1751fb91d952b52a9596f44fd1141ea0b3d6d1200aef2777f4c474",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

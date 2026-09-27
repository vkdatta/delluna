export const name="tire_repair-fill";
export const id="dl_f43e2b9491aa6acb4f6c";
export const url=new URL("../icons/tire_repair-fill.svg?v=be2353a56505e06350511b3b69b32b7a9ee5a22d79a6772c654dc310bb512653",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

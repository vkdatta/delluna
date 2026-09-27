export const name="tray-arrow-up-fill";
export const id="dl_f7e22f022204d970a820";
export const url=new URL("../icons/tray-arrow-up-fill.svg?v=9183eb59924c5f8eb6db021e3064ec195866ebc86f32f5777b3f0217a6b8da93",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

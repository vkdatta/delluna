export const name="mobile_alert-fill";
export const id="dl_a9eeaf55afb110104bb6";
export const url=new URL("../icons/mobile_alert-fill.svg?v=12ad097da3df959da61718645a6940411bbb8eefb4acce17e5aa15a3b23770b4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

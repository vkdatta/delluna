export const name="wb_auto-fill";
export const id="dl_f9cd4d12c43ce783e710";
export const url=new URL("../icons/wb_auto-fill.svg?v=216bc089c528be51c8d0207399ff32fde2a80d504766031deab9dc9ea292e745",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

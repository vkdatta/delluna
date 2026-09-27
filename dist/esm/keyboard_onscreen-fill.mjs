export const name="keyboard_onscreen-fill";
export const id="dl_9b781d040833696d51e3";
export const url=new URL("../icons/keyboard_onscreen-fill.svg?v=7727638ea82c0b0f43dd95e9658e9194b49847fc8bc8a5e55c8965aaf3426d02",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="keyboard_control_key-fill";
export const id="dl_70b623e0adc50f19bac4";
export const url=new URL("../icons/keyboard_control_key-fill.svg?v=f7a0f84fc776b11d92e6123e230190df32988a5377267a654e3b04a342a5eede",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

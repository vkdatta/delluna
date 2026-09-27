export const name="keyboard_capslock_badge";
export const id="dl_780928ab4b1c52421e11";
export const url=new URL("../icons/keyboard_capslock_badge.svg?v=2dcebb54a3f86291e84b6c76d87c83a5ccabaea741ffc422049937eb0d7f30b8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

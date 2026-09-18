export const name="keyboard_hide-fill";
export const id="dl_bcc97bea6902473aa2a0";
export const url=new URL("../icons/keyboard_hide-fill.svg?v=ea3d334bb7d5aa51e67d71f6d39d2aab2a5de0cd941676e20b5a23362d6ffee8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

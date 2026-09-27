export const name="keyboard_double_arrow_right";
export const id="dl_9a0d1129cafe78edf916";
export const url=new URL("../icons/keyboard_double_arrow_right.svg?v=7a0ab72dff12525895a0c8f0d4d246a29134a8f23c752e232fc160f6785d2b36",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

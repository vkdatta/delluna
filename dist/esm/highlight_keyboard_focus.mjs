export const name="highlight_keyboard_focus";
export const id="dl_6a8354e5d069093d2ce4";
export const url=new URL("../icons/highlight_keyboard_focus.svg?v=98e087793afbab9dedbd48573d70e4366c23598540f95ea8fd97f49bab2b358c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

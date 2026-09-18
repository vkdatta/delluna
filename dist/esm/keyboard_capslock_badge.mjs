export const name="keyboard_capslock_badge";
export const id="dl_d4fcee585a314bbfad84";
export const url=new URL("../icons/keyboard_capslock_badge.svg?v=82d889b1ab38ab83ede11c9d7d150336d0b2b902b5b33291902a8eb2b3fca061",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

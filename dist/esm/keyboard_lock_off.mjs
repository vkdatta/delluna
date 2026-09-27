export const name="keyboard_lock_off";
export const id="dl_44ea5c7a55297a1b19d1";
export const url=new URL("../icons/keyboard_lock_off.svg?v=83861fae3120c5045dbfe8bb2da7158de75a182c223e8df2ec419bd3f84c82ee",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

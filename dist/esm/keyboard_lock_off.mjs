export const name="keyboard_lock_off";
export const id="dl_bc2eabc81db3d10c31c1";
export const url=new URL("../icons/keyboard_lock_off.svg?v=646219aebfcd2b74b09d73b4dbe514def5436673902b5f82468aae28babf878c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

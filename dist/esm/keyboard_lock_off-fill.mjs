export const name="keyboard_lock_off-fill";
export const id="dl_275155dad9dbdfe84dc2";
export const url=new URL("../icons/keyboard_lock_off-fill.svg?v=c530a37e4a5971fdcc5d6b8f5f8c3bc48ef9948439d84151a27455d8bcf0f029",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

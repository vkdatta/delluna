export const name="keyboard_lock_off-fill";
export const id="dl_b2d9860977da139a34b9";
export const url=new URL("../icons/keyboard_lock_off-fill.svg?v=405720f93be4ede7b69d7bceeda31cd971e068e8985917e5d204fdd0a9d9f10d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

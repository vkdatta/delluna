export const name="mouse_lock_off-fill";
export const id="dl_ae0e22d33313ca9716b3";
export const url=new URL("../icons/mouse_lock_off-fill.svg?v=18e021a3822fe6d946a74722cd7ecb81307598f878f76573ef7b4652806e6b73",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="shift_lock-fill";
export const id="dl_747b9a949e6d97251979";
export const url=new URL("../icons/shift_lock-fill.svg?v=295ffb8af76e2425e6f130d8a748b683eaea453e1693863f3ee80ffd3ef60f41",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

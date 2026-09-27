export const name="motion_photos_paused";
export const id="dl_b0eee4ecc4926ad1aa24";
export const url=new URL("../icons/motion_photos_paused.svg?v=5c37f8d6f60bba2389036f44e3237783505891f22788e84aea8484732c8c5872",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

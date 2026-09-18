export const name="slow_motion_video-fill";
export const id="dl_6a883ad1b3594d5e8570";
export const url=new URL("../icons/S/slow_motion_video-fill.svg?v=e1cde8cb35266e5850c8f1d1165d592c421e82449b2a8b7afc5f87e4a58badea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

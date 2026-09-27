export const name="motion_photos_paused-fill";
export const id="dl_16190c36b85906806e35";
export const url=new URL("../icons/motion_photos_paused-fill.svg?v=f96adc19424e3d182d1830b67b2f756480a495ffdbff1b1424d17e805b0abba9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

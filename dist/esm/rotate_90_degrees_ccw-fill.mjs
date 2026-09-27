export const name="rotate_90_degrees_ccw-fill";
export const id="dl_61ce14db3b7f1502bd4f";
export const url=new URL("../icons/rotate_90_degrees_ccw-fill.svg?v=f9d753e64c1cb77f3f5091ed12dc7cc4119a135098a8a2c524127c753e0e2451",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

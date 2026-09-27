export const name="chair_fireplace-fill";
export const id="dl_8e83e6c5693e04c1524a";
export const url=new URL("../icons/chair_fireplace-fill.svg?v=8b82b85a9e885c1072d22b273c86750e5b778a3d130fced4706721614d7fa8e4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

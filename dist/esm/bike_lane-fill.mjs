export const name="bike_lane-fill";
export const id="dl_6e7d6d2401c44b5492b7";
export const url=new URL("../icons/bike_lane-fill.svg?v=35eb3d4823c39c95b7852e43c927c372a9fb0786a822c466d2d38335ff0ff5b7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

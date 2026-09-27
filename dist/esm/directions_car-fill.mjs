export const name="directions_car-fill";
export const id="dl_1c4f9d6fb29eb387ebcc";
export const url=new URL("../icons/directions_car-fill.svg?v=3ac5b5a5ccb4f3afeb85e86fd7c3828f68ba8d0df11a55a37419464b0eaaca16",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

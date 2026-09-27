export const name="bike_dock-fill";
export const id="dl_1aac8f31afabe91f6076";
export const url=new URL("../icons/bike_dock-fill.svg?v=f9e64ba8448b385b50ef279665447a9a17cff4181d0df64756f8d68257636dff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

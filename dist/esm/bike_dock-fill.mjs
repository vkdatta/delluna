export const name="bike_dock-fill";
export const id="dl_5e3823a5e35659b8c23a";
export const url=new URL("../icons/bike_dock-fill.svg?v=2269e67fd12a06a38465b6d05f5a8f7ac8a3da202278bf5cf8840a40b086d2f4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

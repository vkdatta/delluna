export const name="location_off-fill";
export const id="dl_84d28bc7b6d443855b9c";
export const url=new URL("../icons/location_off-fill.svg?v=5251417568eaf8b79c0adccef75ec80c14e08d6b8939d3de696e51853984314d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

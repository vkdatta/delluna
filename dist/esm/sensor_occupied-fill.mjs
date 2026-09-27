export const name="sensor_occupied-fill";
export const id="dl_fd54e55a1bea18285426";
export const url=new URL("../icons/sensor_occupied-fill.svg?v=82b7c20827214d0c0614852369b40042e6b5c8281328d14f597a7fe61b7266ae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

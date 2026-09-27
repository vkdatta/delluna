export const name="bus_map_pin-fill";
export const id="dl_9329311c148a7ed6c755";
export const url=new URL("../icons/bus_map_pin-fill.svg?v=cd240a689c7721a312a0ed8967716ea6f8d7c397efd3fa2df9d7c5b25a9019d7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

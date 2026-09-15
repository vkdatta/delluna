export const name="bus_map_pin-fill";
export const id="dl_0f0284d3d62446d891bd";
export const url=new URL("../icons/B/bus_map_pin-fill.svg?v=389926f3b339d998079626c419094be2f01f6afb8820365c7b3f6858aedf2e12",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

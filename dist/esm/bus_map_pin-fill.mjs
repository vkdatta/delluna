export const name="bus_map_pin-fill";
export const id="dl_43cfc8dd81186f4b48df";
export const url=new URL("../icons/bus_map_pin-fill.svg?v=ce9e8e739c5acd8483936ea1debc5a232fa82be1d13a28e1f8e24912a286fb58",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

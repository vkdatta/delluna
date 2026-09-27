export const name="bus_map_pin";
export const id="dl_fc807fb8e3f785574b54";
export const url=new URL("../icons/bus_map_pin.svg?v=57dff75b76c2043b383c5dd141145a15198f7668b61563011c51b1fa7fe5a4fb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

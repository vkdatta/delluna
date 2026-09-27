export const name="delete_sweep";
export const id="dl_cc30b3882051df25e822";
export const url=new URL("../icons/delete_sweep.svg?v=52aa3ff2d37709df3c0750e39a18b6c8864906cc379c2f6d24a68f8dc43fe1d3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

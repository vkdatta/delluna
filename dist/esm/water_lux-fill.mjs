export const name="water_lux-fill";
export const id="dl_48ba47c8d7dcb62f0dd1";
export const url=new URL("../icons/water_lux-fill.svg?v=192f5ebfd5d887caf872dc40aaabf89a40bff6079dc98a390de56e4a698298ba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

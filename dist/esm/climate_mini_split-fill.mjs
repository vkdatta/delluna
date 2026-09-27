export const name="climate_mini_split-fill";
export const id="dl_7adfe958b579227ad852";
export const url=new URL("../icons/climate_mini_split-fill.svg?v=7ed919bdaea5e481b2fd7e339d994c09aa1d18454a3bad7419ce6bb4a4ba960a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

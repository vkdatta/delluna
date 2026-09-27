export const name="lucid_1-arrow-up";
export const id="dl_e67a3431097645399d61";
export const url=new URL("../icons/lucid_1-arrow-up.svg?v=1801d68d44f1f0c8b1c7e3d99eb85a444bf7d5f00199eb77dfae869c306e7086",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

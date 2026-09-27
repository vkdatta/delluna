export const name="lte_mobiledata_badge-fill";
export const id="dl_8c4635bfca7e10510aa0";
export const url=new URL("../icons/lte_mobiledata_badge-fill.svg?v=14d2896ca65ddee65e0b68acd8d82ec8cb1fee51bf704ae3d147049819d45fa0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

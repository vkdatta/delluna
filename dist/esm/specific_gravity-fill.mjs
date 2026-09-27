export const name="specific_gravity-fill";
export const id="dl_c9fec13b6794ebd9e50c";
export const url=new URL("../icons/specific_gravity-fill.svg?v=50f1db0e9321a48ea2d8ab0ffeae1eea9e24d39020a80e8bddd55b9b49fe2b1c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

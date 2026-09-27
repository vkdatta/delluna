export const name="how_to_reg-fill";
export const id="dl_fb4c1d84971fba27c374";
export const url=new URL("../icons/how_to_reg-fill.svg?v=ca93bc0f15136add45fc6365edee7961eccf508a68a9c1ade7ccb83ab805411a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

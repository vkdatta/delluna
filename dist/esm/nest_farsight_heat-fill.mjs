export const name="nest_farsight_heat-fill";
export const id="dl_1a811f24d6086d5d2d54";
export const url=new URL("../icons/nest_farsight_heat-fill.svg?v=6f0881ed82eeaa01f93664d2f1257ddc4312d191174e05e8c88e6090ee5ff281",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

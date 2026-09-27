export const name="device-tablet-light";
export const id="dl_df049235e7bb4c3a95bf";
export const url=new URL("../icons/device-tablet-light.svg?v=613d3e303a8fa59e7c2b401a44efbcdf19b1bdc5239ca56c655c037e0af7b7ac",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

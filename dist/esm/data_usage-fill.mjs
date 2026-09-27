export const name="data_usage-fill";
export const id="dl_df47f375a682cf1841fd";
export const url=new URL("../icons/data_usage-fill.svg?v=a8eb0e3d98ceae441ef2358e6770e229498171e3390c716fabc674b49bb1ba70",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="battery_1_bar-fill";
export const id="dl_f1ca5777f5f4b45c7c39";
export const url=new URL("../icons/battery_1_bar-fill.svg?v=4fc14f43a4c75ddfd99e2ffc3f0494c00832e88e8121422482fb9274cd9fd3bc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

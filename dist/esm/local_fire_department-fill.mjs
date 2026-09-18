export const name="local_fire_department-fill";
export const id="dl_13b0040d748c48e8b544";
export const url=new URL("../icons/local_fire_department-fill.svg?v=b85e54a69e22b6af15e8bef60a60dd49a6885e6d977e2615fe420bfe36ea0411",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

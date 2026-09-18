export const name="holiday_village";
export const id="dl_b6f043bc09754eecb761";
export const url=new URL("../icons/H/holiday_village.svg?v=77f34ccbd9f48d4d518f28f20cd5ac11b2ad52c53c2593585b6c756aaf7a499a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

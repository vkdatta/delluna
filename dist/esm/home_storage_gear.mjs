export const name="home_storage_gear";
export const id="dl_4995f3aab5588bba066b";
export const url=new URL("../icons/home_storage_gear.svg?v=bce6924ed8f72e2e06a653e20627ada4ada59da641b36034e519f1931086132e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="dashboard_2_add";
export const id="dl_36479e2d1c14d429e258";
export const url=new URL("../icons/dashboard_2_add.svg?v=ba35053ab9df6615a39fb23a27de2d558f1a4fb26308df7e5e7ce34ede8dc52d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

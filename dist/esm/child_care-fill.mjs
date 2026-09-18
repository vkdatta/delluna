export const name="child_care-fill";
export const id="dl_7b7e5d8e38144ba19761";
export const url=new URL("../icons/child_care-fill.svg?v=50c1f5dfc95b9e645929257c7dbadfea6cff2c4025c4c423de4ec2b865e6a4ee",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

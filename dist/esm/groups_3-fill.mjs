export const name="groups_3-fill";
export const id="dl_1f9999d4fd97086f11c1";
export const url=new URL("../icons/groups_3-fill.svg?v=c02a540645138022ed9c3b07bc0c564f15a02ed4391aae1fd63d50e7fc30c847",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

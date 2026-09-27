export const name="group_search";
export const id="dl_d01a2ab100a58c26f4b0";
export const url=new URL("../icons/group_search.svg?v=8673debd68dbaff38fc9fa15cb9edeabb02c1e7ce451084e51daaf3745ac066b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

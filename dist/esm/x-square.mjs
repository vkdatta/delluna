export const name="x-square";
export const id="dl_4ed900262185e6606a5b";
export const url=new URL("../icons/x-square.svg?v=ee4e8ec0b93ae07da60a051c9fb9a4f2c975aef4fc9f5a598bd1019448169453",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

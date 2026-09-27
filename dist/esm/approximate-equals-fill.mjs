export const name="approximate-equals-fill";
export const id="dl_f2ddb7dbb28d4817babc";
export const url=new URL("../icons/approximate-equals-fill.svg?v=08e7d8dd7934a949df278074de25f5ee3aac1c85e5e82b8bec0329526f5e6340",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

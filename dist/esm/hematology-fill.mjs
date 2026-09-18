export const name="hematology-fill";
export const id="dl_6c2cd7b23b644656973c";
export const url=new URL("../icons/hematology-fill.svg?v=b1cb818b66648eb699e7b495ca474f4765a64dce31c2a826fa9aff57ba453fd1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

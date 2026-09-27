export const name="hematology-fill";
export const id="dl_86a016f100c7b27a0e16";
export const url=new URL("../icons/hematology-fill.svg?v=3c40be73025b4470c4e1a08316d2620a65cc64b9a93a5c1fdb91f6d8164cb332",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

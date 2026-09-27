export const name="build_circle-fill";
export const id="dl_4efa95709cfdb7e986cc";
export const url=new URL("../icons/build_circle-fill.svg?v=37253b31f9261ac853637e708bf16d35e5041bcd014c337c70d83306b81dc73d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="warehouse-light";
export const id="dl_c9de57c84c7db3237a6e";
export const url=new URL("../icons/warehouse-light.svg?v=a1e49cd84c1848935ae32fbadb90a59d73bd922149e32c189270466a1f3409c6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

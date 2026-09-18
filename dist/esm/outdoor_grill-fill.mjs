export const name="outdoor_grill-fill";
export const id="dl_80aa39ede5be4004890f";
export const url=new URL("../icons/O/outdoor_grill-fill.svg?v=3891714f3422aa12ab93f89b1978e3fefdca4caef76ecd09d190a5a10f402184",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

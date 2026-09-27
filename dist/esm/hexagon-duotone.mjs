export const name="hexagon-duotone";
export const id="dl_1af23a74ae9f44ab9d8e";
export const url=new URL("../icons/hexagon-duotone.svg?v=f0ca85f49ae6a50baafb68848154810fff63e5e3444d00703ad39bea0167a6c8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

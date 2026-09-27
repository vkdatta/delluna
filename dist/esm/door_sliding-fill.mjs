export const name="door_sliding-fill";
export const id="dl_a165bbe117753799f7c2";
export const url=new URL("../icons/door_sliding-fill.svg?v=86d29c8f9aa5191a183563e39b6c55999f8ad9eb54c727afbc7f77fa3b29d351",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

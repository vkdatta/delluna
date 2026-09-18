export const name="production_quantity_limits";
export const id="dl_fc1ca8f330eb44788355";
export const url=new URL("../icons/P/production_quantity_limits.svg?v=393219a3e55d148607c6db664c9fa531789234adb51b84af8344a7c4558f20e6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

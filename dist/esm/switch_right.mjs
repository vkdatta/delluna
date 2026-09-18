export const name="switch_right";
export const id="dl_df721c96e75346f3802a";
export const url=new URL("../icons/switch_right.svg?v=66d8d3c99d9f95f33ef971bf4500d82a1fb5b639dc3f3c88ca94ef49d16bc8a7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

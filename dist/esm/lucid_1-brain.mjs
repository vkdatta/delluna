export const name="lucid_1-brain";
export const id="dl_a0eede7531f34e8a8ad9";
export const url=new URL("../icons/lucid_1-brain.svg?v=9432fb9d91b07a422e148ec9f5c7da8e0df68d0b8dc57177066d3153caadb646",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

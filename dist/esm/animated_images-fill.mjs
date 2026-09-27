export const name="animated_images-fill";
export const id="dl_df579763f35fe10d3b35";
export const url=new URL("../icons/animated_images-fill.svg?v=72bb9ade4013176107f05ec19183345ef24a017033fd7783b8ed7d0f79df9f32",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

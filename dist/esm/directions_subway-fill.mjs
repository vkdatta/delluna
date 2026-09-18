export const name="directions_subway-fill";
export const id="dl_7f995c5c8fa74f6d814c";
export const url=new URL("../icons/directions_subway-fill.svg?v=494c4aa05c5344355f3fbd15be1f319bac63514dc9f092c23e58cbcc3d458d36",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

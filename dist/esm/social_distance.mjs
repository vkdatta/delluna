export const name="social_distance";
export const id="dl_6fb6bc4e97d3195907ce";
export const url=new URL("../icons/social_distance.svg?v=bc26590aa69a2d66ff47620672354e4e62ff4e0a58a88406386fd3ebf1123377",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

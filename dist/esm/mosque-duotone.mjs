export const name="mosque-duotone";
export const id="dl_eb796216b3b14c7d9e8b";
export const url=new URL("../icons/mosque-duotone.svg?v=10bd64c0fcd576f2ac7123345d9c5953d0b613d3d99c3f0807fd5aa6fa8b83fa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

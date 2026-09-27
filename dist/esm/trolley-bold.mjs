export const name="trolley-bold";
export const id="dl_632873ee180c147c3486";
export const url=new URL("../icons/trolley-bold.svg?v=3d0993001b3397663f5a3fe4092c7c09277d67a917185cb3fdaafb1a1267bd71",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

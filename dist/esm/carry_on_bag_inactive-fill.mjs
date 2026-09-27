export const name="carry_on_bag_inactive-fill";
export const id="dl_5112f60ab0946d263ac7";
export const url=new URL("../icons/carry_on_bag_inactive-fill.svg?v=3d1cd68aa935c1a5d838d7723548a2f2dc31bf18fce87ab9a3aca0fc1cbcb7a1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

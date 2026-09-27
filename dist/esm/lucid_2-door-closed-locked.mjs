export const name="lucid_2-door-closed-locked";
export const id="dl_8a7aeb10189249758321";
export const url=new URL("../icons/lucid_2-door-closed-locked.svg?v=0215e8c9f4bdbc13eca96b11da4ff28e6e46a17e28b235a732201c6bae2a175b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

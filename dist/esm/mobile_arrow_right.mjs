export const name="mobile_arrow_right";
export const id="dl_77dfd28e6a06e5439458";
export const url=new URL("../icons/mobile_arrow_right.svg?v=ede957251dd34bbea4196a2dc8911613ce35e1dd3b414052a842c37ad846d787",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

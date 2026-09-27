export const name="gear-fine-light";
export const id="dl_ce3906030a374aa498c1";
export const url=new URL("../icons/gear-fine-light.svg?v=74b0653cf93eb0f56c616f1a5f255db52719126e6000dc1cc037816f6568418b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

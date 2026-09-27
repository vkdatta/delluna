export const name="bone-duotone";
export const id="dl_77b2ecfc7e494f7d94c3";
export const url=new URL("../icons/bone-duotone.svg?v=6e905427c1e8166e4cb4a94285fc63a5c4fac142e3b0f42c51047194e6b8002f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

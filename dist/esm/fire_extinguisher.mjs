export const name="fire_extinguisher";
export const id="dl_b27c084dd4e637d421c8";
export const url=new URL("../icons/fire_extinguisher.svg?v=ad8c1bd39b2a5cd0b43db2c9c8e83b8ad3cdf3d7b974d70f0e21eff351527837",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

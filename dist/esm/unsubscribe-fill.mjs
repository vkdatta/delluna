export const name="unsubscribe-fill";
export const id="dl_2a2e62e832b2a1d288cc";
export const url=new URL("../icons/unsubscribe-fill.svg?v=592326ba184f1dbee3d3b5ec2e8eec3f52059b408b2e3d0417991b6dab8360d3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="gift-light";
export const id="dl_fe17e3214f89478f81bb";
export const url=new URL("../icons/gift-light.svg?v=cb749f1771502b8ab5fe1440134578fc92f2fcf2715c37ad5c5a94012d5e2dd8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

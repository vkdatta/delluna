export const name="lock_open";
export const id="dl_3dd970f0bdbd46bfa2d7";
export const url=new URL("../icons/lock_open.svg?v=c0b90e90329fd013d23b363f18ac0a731976f73be26e745806dc216de395d13d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

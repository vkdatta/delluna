export const name="modeling-fill";
export const id="dl_3007eafe2b36b4955e80";
export const url=new URL("../icons/modeling-fill.svg?v=38f03e61e2c32567ceed1ba6b37f9570ab40bf58cf2566476893489057a15644",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

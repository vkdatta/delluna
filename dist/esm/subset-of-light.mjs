export const name="subset-of-light";
export const id="dl_bd65fef7788145029c72";
export const url=new URL("../icons/subset-of-light.svg?v=a3a5ed836d3f3792c38f0eac150006f79930c286007a1b0d995301999d28d485",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

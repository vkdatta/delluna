export const name="photo";
export const id="dl_598d32ebea9e65b2b27a";
export const url=new URL("../icons/photo.svg?v=38988c0785f2c2ca3a994fc4cc8ea604d54c2719468106040ee414595d90fc37",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="notifications_off";
export const id="dl_24db3c3ed2dee3aee751";
export const url=new URL("../icons/notifications_off.svg?v=94bca48203c64d734895acfdc867576f1a5ccfedf8f2827d2dc9084dda7c54be",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

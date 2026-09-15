export const name="crop_16_9";
export const id="dl_3ba23471a6fa4fb2b113";
export const url=new URL("../icons/C/crop_16_9.svg?v=d81f2b302f632e7cf32e10ee67c24ea78ff1fed27031a08749a269afccd176df",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

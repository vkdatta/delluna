export const name="mode_fan";
export const id="dl_cf5843da98ea89688890";
export const url=new URL("../icons/mode_fan.svg?v=1528917ab10d4c8ab49ffd3b01d45d16f8b4231560055570cf9f549bfc360d5f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

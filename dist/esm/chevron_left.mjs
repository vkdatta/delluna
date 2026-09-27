export const name="chevron_left";
export const id="dl_5ffdff5a1ea56855ec87";
export const url=new URL("../icons/chevron_left.svg?v=4c4169058c30c35ffec911b9214c6c1d3212bf8224a79e382f5ee85cc9266eb4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

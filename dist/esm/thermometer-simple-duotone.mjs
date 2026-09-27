export const name="thermometer-simple-duotone";
export const id="dl_23900385882a6f205a94";
export const url=new URL("../icons/thermometer-simple-duotone.svg?v=4cb990fb89c31544489f6d7989088e363fe4230d90e1266e6a98c1e9f7dacf60",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

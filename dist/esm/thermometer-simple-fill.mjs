export const name="thermometer-simple-fill";
export const id="dl_46d84e6b70d941aca5c2";
export const url=new URL("../icons/T/thermometer-simple-fill.svg?v=5d5d33781c5df0827211acd9d5e3231927db953723f74dbb537cda2ff2cda4d5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

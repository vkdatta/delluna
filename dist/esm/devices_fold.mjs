export const name="devices_fold";
export const id="dl_a2b97c1c91954a18b3c3";
export const url=new URL("../icons/devices_fold.svg?v=8207c83cf23ac22a10a59073758ca52543d879a49ad68c1e3c52812cb443a6e5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

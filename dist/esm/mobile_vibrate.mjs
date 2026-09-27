export const name="mobile_vibrate";
export const id="dl_bcb1a3d272b5d25f3317";
export const url=new URL("../icons/mobile_vibrate.svg?v=fe64de4b5ba69425e5bcd2dfeff7a5c86c0ec74adcfb41be511d4ce5a8d24461",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

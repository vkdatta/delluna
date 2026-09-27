export const name="devices_other-fill";
export const id="dl_5e3619e1e57748fd0763";
export const url=new URL("../icons/devices_other-fill.svg?v=b2d25cf9ff3b0bdf327e6d6222f3028d2a77241de40bc77189591d78d5eb7645",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="exposure_plus_1";
export const id="dl_2c7e70fcfb4a4197e9b4";
export const url=new URL("../icons/exposure_plus_1.svg?v=28514615891b7d33f66b1af88d390a18be21c69349481c82a132c26095a245fe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

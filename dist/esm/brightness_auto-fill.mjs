export const name="brightness_auto-fill";
export const id="dl_c950a177792fe4a38d85";
export const url=new URL("../icons/brightness_auto-fill.svg?v=030388bbf7e8ed8bc6f83607c017c98621232ac6c2c093dfc420763723209b11",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

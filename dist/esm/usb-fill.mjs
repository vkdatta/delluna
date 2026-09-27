export const name="usb-fill";
export const id="dl_ae1b45e8d61e49e845b5";
export const url=new URL("../icons/usb-fill.svg?v=ae26271945835b98d7aec6a65960cffb09a9a3723dac5aa304a41855b28b49b8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

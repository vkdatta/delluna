export const name="perm_scan_wifi";
export const id="dl_0b7d2b5fd8849916d666";
export const url=new URL("../icons/perm_scan_wifi.svg?v=a0d15b03aaeef4d91c5c0444d8f7c1cb7b139157fa619ef8c3576af269b9440f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="usb-light";
export const id="dl_cf99ad075f7464ae2f9e";
export const url=new URL("../icons/usb-light.svg?v=85483c5ac9a3ba895a1767949fa7ed9b39a4d1687fc7db5ee69aee962f9f9fec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

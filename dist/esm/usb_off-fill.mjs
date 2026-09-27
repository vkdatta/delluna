export const name="usb_off-fill";
export const id="dl_6473bd51bca037e26b62";
export const url=new URL("../icons/usb_off-fill.svg?v=c7820fc8fd8db8abfc9b3e5a94ade2f7cfd93c4a6c3d2d5944ac3546f7f9dcf0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

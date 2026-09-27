export const name="wifi_device";
export const id="dl_3d747eb366b4af7fe3e8";
export const url=new URL("../icons/wifi_device.svg?v=c5bd9b25d498f316597137d6c458015c77922bba191d9da4ac54b2313d109511",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

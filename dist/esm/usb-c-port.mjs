export const name="usb-c-port";
export const id="dl_da318371907b4a82976a";
export const url=new URL("../icons/usb-c-port.svg?v=7fe6e9c5152418638a5b7803c8f3d777c12f2b5697101b149dfd36e903bd9c5c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

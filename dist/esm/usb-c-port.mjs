export const name="usb-c-port";
export const id="dl_da318371907b4a82976a";
export const url=new URL("../icons/usb-c-port.svg?v=9f09839c6fc2e4ff19aa9aa4f2553883abe3fe037702fcefb5824eb2e79d7a9c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

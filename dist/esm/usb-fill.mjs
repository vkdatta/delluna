export const name="usb-fill";
export const id="dl_71e37c986ba3e4c6261e";
export const url=new URL("../icons/usb-fill.svg?v=aaf568e0b9b7e379b00b9c553e28e738df82b8a5857be107ae55ed43425cef83",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

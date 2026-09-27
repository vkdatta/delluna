export const name="usb-c-port";
export const id="dl_da318371907b4a82976a";
export const url=new URL("../icons/usb-c-port.svg?v=c31e8b098fef2406d21828eb9359de4cd0f0ed8b41837963dc3443bde3ffc24f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

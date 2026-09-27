export const name="usb-c-port";
export const id="dl_da318371907b4a82976a";
export const url=new URL("../icons/usb-c-port.svg?v=302ff133b4d3714f14e2a5f56b394effa49d49868e246ef55132e9fd789646ce",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="device_band";
export const id="dl_c2ea76ed3bf77270c34e";
export const url=new URL("../icons/device_band.svg?v=9fbd94f8466cdd9aa344d815423d821edba0c58e64205059aad49f2ce53c5d02",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

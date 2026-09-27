export const name="bluetooth_connected-fill";
export const id="dl_4ee0ec3b10d89f97d83c";
export const url=new URL("../icons/bluetooth_connected-fill.svg?v=16b6479419fce04a8450972d3ad249c5eb13825944faafe2dc02557338dd2dd7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

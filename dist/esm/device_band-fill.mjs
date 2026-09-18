export const name="device_band-fill";
export const id="dl_0c238013632d41288cc2";
export const url=new URL("../icons/device_band-fill.svg?v=60f2f07be6cb01ef424210977e6eb1a0d8295da077b352b977e1be45d16e0105",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

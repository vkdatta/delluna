export const name="bluetooth_connected-fill";
export const id="dl_b875c5f9d5eb57c9fbc6";
export const url=new URL("../icons/bluetooth_connected-fill.svg?v=7f3624188fe168f3ba75ea4db36767bd84bf0f307d33c5edfc50bfb9ec68f337",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="bluetooth_drive-fill";
export const id="dl_340e6ae5b11c001f9d15";
export const url=new URL("../icons/bluetooth_drive-fill.svg?v=19d0b1a5b86aa16056249641bde6fc6ebc771a56ef6e1428d81bea5bffa362ee",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

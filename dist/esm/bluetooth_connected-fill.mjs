export const name="bluetooth_connected-fill";
export const id="dl_99deef60f4a8491e8b14";
export const url=new URL("../icons/bluetooth_connected-fill.svg?v=2a8f34afcd7794a8d1401f9380e23e7421d6c78082862d9217e3164874814042",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

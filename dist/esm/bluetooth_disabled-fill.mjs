export const name="bluetooth_disabled-fill";
export const id="dl_a4b144115d8ce1a95c15";
export const url=new URL("../icons/bluetooth_disabled-fill.svg?v=eb1aeb641dd67d061329055820edcf08a1d3da1580aeced5f78a5ae9df780b15",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

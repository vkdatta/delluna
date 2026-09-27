export const name="clock-user-thin";
export const id="dl_49d97d074cca4c388838";
export const url=new URL("../icons/clock-user-thin.svg?v=a110041c1f6105d0083c9695ca40cd76dc6b01a401299037800341920709c03d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

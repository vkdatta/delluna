export const name="mobile_charge-fill";
export const id="dl_1429276dc41c2834ac15";
export const url=new URL("../icons/mobile_charge-fill.svg?v=96e80f4faac85f6ed1225a90b7169aaf28bd140ac44097a551c4c74d979e281a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

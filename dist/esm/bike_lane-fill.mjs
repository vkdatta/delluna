export const name="bike_lane-fill";
export const id="dl_54036646a52b9b9934e3";
export const url=new URL("../icons/bike_lane-fill.svg?v=81497055aedb83bc6450edc52da78e1ce55a845591a8ff8c441d239b8390da76",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

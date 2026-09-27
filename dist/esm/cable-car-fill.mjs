export const name="cable-car-fill";
export const id="dl_3c47ab80218e4d78969c";
export const url=new URL("../icons/cable-car-fill.svg?v=c044d392bf1139f6a3a2ea3cc4139d2e57401dfd31c9eff602011ad14e941ddb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

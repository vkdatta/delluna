export const name="battery_alert-fill";
export const id="dl_640476150b9b2a478f88";
export const url=new URL("../icons/battery_alert-fill.svg?v=02ccefd84a237b951e233a356d80665bff67b13465f6190f3b3cec836dbaf3ce",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

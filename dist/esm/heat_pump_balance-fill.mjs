export const name="heat_pump_balance-fill";
export const id="dl_d7ce43a9b3ac22c8ec67";
export const url=new URL("../icons/heat_pump_balance-fill.svg?v=d5997969aa8dd3834271e33ac40f9a57900712c499e49bdb744bf0f1c210d660",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="heat_pump_balance-fill";
export const id="dl_df01895816244923be4a";
export const url=new URL("../icons/H/heat_pump_balance-fill.svg?v=38cc5086e9fa01ef80c019332dad3244aec2984741ed36db310380d8a7320f58",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

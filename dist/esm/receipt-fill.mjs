export const name="receipt-fill";
export const id="dl_6d5cdc20785840b59284";
export const url=new URL("../icons/receipt-fill.svg?v=45b487f9751be5be74ee46cb8e7237e8b42201fb015884211cb264791a694b94",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="alarm_on-fill";
export const id="dl_a76ba43f072b9bf3ee29";
export const url=new URL("../icons/alarm_on-fill.svg?v=1c709506a97c253461818dba3765967dc8dc2c03bfce8bba87ff464a8417520a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="thermometer";
export const id="dl_37f6a17215fc49dbbec4";
export const url=new URL("../icons/T/thermometer.svg?v=fbe42cf4910d02a41df98cd26044da36d706c347d4656b56ce343f67d2674cde",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

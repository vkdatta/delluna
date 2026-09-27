export const name="tamper_detection_on-fill";
export const id="dl_c43e7dba040f9abb35ee";
export const url=new URL("../icons/tamper_detection_on-fill.svg?v=3b28196ca8d31acefcd0b0eedc08fc76864023e8207a57abfc7452c40e19bb9a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

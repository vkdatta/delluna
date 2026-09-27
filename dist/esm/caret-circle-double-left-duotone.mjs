export const name="caret-circle-double-left-duotone";
export const id="dl_f1e49587325c405c9ebb";
export const url=new URL("../icons/caret-circle-double-left-duotone.svg?v=e84b63fa5ee209dad3a292a57b6e298e35b1633b53960115f8e35124adc75e7a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

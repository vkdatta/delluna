export const name="arrow-line-down-right-thin";
export const id="dl_adc1a57d2ca348029391";
export const url=new URL("../icons/arrow-line-down-right-thin.svg?v=5575195495872d0308bc1179fb659e4c7b3c82d30744728ce812f09cb631d366",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

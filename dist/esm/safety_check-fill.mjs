export const name="safety_check-fill";
export const id="dl_b8a3670389d8fe96471e";
export const url=new URL("../icons/safety_check-fill.svg?v=2e7f91c553e4adc1af2c80e8becd8513515364db53aad7d879086a3f1bc6657f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

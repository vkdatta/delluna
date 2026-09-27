export const name="number-zero-light";
export const id="dl_e8574c3bd62a41ec8eab";
export const url=new URL("../icons/number-zero-light.svg?v=2b7acda5b161fd34bdfd9322016614e6782293a57afc3f90e32165fe664f6d1b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="stethoscope_check-fill";
export const id="dl_70eb60364a63f6683daf";
export const url=new URL("../icons/stethoscope_check-fill.svg?v=2c4fbcd0eda9bcd99b3535ca46d299a1a8ee7ee1efa87bd33b84f001b68bdea8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

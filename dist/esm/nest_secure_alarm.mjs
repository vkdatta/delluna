export const name="nest_secure_alarm";
export const id="dl_fdb9d9656b7c459889df";
export const url=new URL("../icons/nest_secure_alarm.svg?v=23e954d18ec993532f097ac2734d91d627bea8283ebd88de4a50b02c378cbd8f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="briefcase-metal-duotone";
export const id="dl_3bd2ef23f78c448caf3b";
export const url=new URL("../icons/briefcase-metal-duotone.svg?v=04505354e11c63370607e4563a7fdbefcf5a905d58fdd675a27222b4c0adc3c7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

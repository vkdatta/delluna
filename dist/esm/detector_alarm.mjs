export const name="detector_alarm";
export const id="dl_08f43c4734764b14a554";
export const url=new URL("../icons/detector_alarm.svg?v=421773c2761c68d94c308303bece67d5f47e52fb179f6bcec46dce715dad65c2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

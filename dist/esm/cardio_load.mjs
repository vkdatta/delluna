export const name="cardio_load";
export const id="dl_9b636f1a217db1d89127";
export const url=new URL("../icons/cardio_load.svg?v=886fc7924febcb2400aacf723bf432582f6dd2da8b208842b680113e3e2e9f20",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

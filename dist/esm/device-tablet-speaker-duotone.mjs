export const name="device-tablet-speaker-duotone";
export const id="dl_9d72f064b2e1417ab300";
export const url=new URL("../icons/device-tablet-speaker-duotone.svg?v=d08da99a7bf225f45fcc8fc0d8b20f00b43ff1741dc0a6ce864c2c624e1b7c11",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

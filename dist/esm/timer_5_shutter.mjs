export const name="timer_5_shutter";
export const id="dl_2ed1329d48e348e9830c";
export const url=new URL("../icons/T/timer_5_shutter.svg?v=dda5d9eaa048ad2b989fc2f795702a2ee316e5f0c7737c2363d01c603305c008",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

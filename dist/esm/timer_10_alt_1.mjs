export const name="timer_10_alt_1";
export const id="dl_9ae2f498dd39814906fb";
export const url=new URL("../icons/timer_10_alt_1.svg?v=d1537c8299658c5c3625709e2aee2e29a8c12e10427109dae523c78e0a40f1fc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

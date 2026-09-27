export const name="timer_pause-fill";
export const id="dl_2e2f11392cf244bbc4f8";
export const url=new URL("../icons/timer_pause-fill.svg?v=96ae907e8b4fbf03cf1cc17a44c5e23db7cbd6b5bbfd138e3458183f12fc2055",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

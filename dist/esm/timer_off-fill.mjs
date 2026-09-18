export const name="timer_off-fill";
export const id="dl_47a807e653c3433daac2";
export const url=new URL("../icons/timer_off-fill.svg?v=d0226a02f23b89bafe67e24a4d0f6f36cb160be725247796411f6e67f9a7ef50",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

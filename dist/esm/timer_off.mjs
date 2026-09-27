export const name="timer_off";
export const id="dl_a577a8f9ec303fe5380f";
export const url=new URL("../icons/timer_off.svg?v=7ca8be2fc997c28f0708791be917b268faf6b2924a4b8245a4962bc22d5a3675",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

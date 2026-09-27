export const name="timer_3_alt_1";
export const id="dl_9f5e8780ddc2f0d4b16e";
export const url=new URL("../icons/timer_3_alt_1.svg?v=f2af3b8d921e68e32ef0a732424f5c9455706ae34affa08aae906cb5f7280718",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="lucid_1-calendar-minus";
export const id="dl_1bb2a29e18bc4993a5df";
export const url=new URL("../icons/lucid_1-calendar-minus.svg?v=c035257b1849e32ebbefefeff78e58d4fef038e37e312f55e715de9abbc86d88",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

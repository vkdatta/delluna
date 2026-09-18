export const name="mobile_vibrate-fill";
export const id="dl_9b3226de85cc47319635";
export const url=new URL("../icons/M/mobile_vibrate-fill.svg?v=0aecb4d6b34ea38fe4a4e2450a1654001a9b7ad9a9b3ec0e3350417ebc89aa25",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

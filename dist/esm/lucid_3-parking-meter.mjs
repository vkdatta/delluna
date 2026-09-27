export const name="lucid_3-parking-meter";
export const id="dl_fa93366d66eb43288a8e";
export const url=new URL("../icons/lucid_3-parking-meter.svg?v=c9c02b8d21712eb4af9a82f4dceb68bba87a03df20c25b89db536bd4460c0f08",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

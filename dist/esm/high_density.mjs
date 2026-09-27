export const name="high_density";
export const id="dl_5288fd58f3504248bdb0";
export const url=new URL("../icons/high_density.svg?v=9b8e961a8cd5839d23900bff9ccc793f12fff22c151f864ae4d7507ffac5ce5c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

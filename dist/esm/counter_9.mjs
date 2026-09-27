export const name="counter_9";
export const id="dl_0e5307a81a0d09a8b6cc";
export const url=new URL("../icons/counter_9.svg?v=7fe05c7d8d132459a0da10a9fad485521bed1212264107e3d7e06b79cc4d2fd4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

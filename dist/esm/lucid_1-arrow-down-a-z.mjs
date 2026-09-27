export const name="lucid_1-arrow-down-a-z";
export const id="dl_539d9cd79e1740d3bde5";
export const url=new URL("../icons/lucid_1-arrow-down-a-z.svg?v=02d95f7149ef19ae06525c528c795e1361f33514aa8ae487d101b7d7b33657ea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

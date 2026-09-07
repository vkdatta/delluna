export const name="van-light";
export const id="dl_d202962cb71d4f7cbe1b";
export const url=new URL("../icons/V/van-light.svg?v=b3c0fd4e8308375eded70ed229d0929ea0c4d5ea997bc3d8be925729e6659bc1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

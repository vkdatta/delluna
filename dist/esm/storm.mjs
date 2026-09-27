export const name="storm";
export const id="dl_9d08136e6b4bf68f0b43";
export const url=new URL("../icons/storm.svg?v=f066ce422bdcf329c5dfd38a422d0419b9c7f27d539c5ddfd3f38ebbe743bbd3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

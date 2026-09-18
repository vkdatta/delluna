export const name="storm";
export const id="dl_9e9d70fd2b044d4880cf";
export const url=new URL("../icons/storm.svg?v=f066ce422bdcf329c5dfd38a422d0419b9c7f27d539c5ddfd3f38ebbe743bbd3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

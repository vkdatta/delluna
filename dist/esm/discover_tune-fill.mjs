export const name="discover_tune-fill";
export const id="dl_7dfdb2f132e77cc52ee5";
export const url=new URL("../icons/discover_tune-fill.svg?v=92d85729fd0d98c5624de92614eb117aa9ecbd0cd87f17451a6a774b8b80775e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

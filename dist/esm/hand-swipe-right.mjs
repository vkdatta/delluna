export const name="hand-swipe-right";
export const id="dl_41d89dc4a694476ebe74";
export const url=new URL("../icons/hand-swipe-right.svg?v=b9075a91ecd9e77ff57d11dec003dade9e73a74f7af48c9fb6d67df287418ae5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

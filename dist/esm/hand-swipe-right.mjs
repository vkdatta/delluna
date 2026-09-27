export const name="hand-swipe-right";
export const id="dl_41d89dc4a694476ebe74";
export const url=new URL("../icons/hand-swipe-right.svg?v=de2aade61d6b4cf6c22717214bdb82fbd0a0f2a83a9e9c4550611970aab0d089",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

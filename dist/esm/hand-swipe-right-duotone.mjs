export const name="hand-swipe-right-duotone";
export const id="dl_96f631775bfb4bc28766";
export const url=new URL("../icons/hand-swipe-right-duotone.svg?v=40c59c4a4428fe4b46a74b0f5b54295bb4b26c000fcefe712f4b0b7f5e16aee2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="hand-swipe-right";
export const id="dl_41d89dc4a694476ebe74";
export const url=new URL("../icons/hand-swipe-right.svg?v=adb640764ea06a608500db23e608e2df5e0842c5d55462f1bf5f2c59231b480a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

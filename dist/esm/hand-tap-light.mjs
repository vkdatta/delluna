export const name="hand-tap-light";
export const id="dl_5011452b343241d2822f";
export const url=new URL("../icons/hand-tap-light.svg?v=d9ac803083ee86e30c8cef1b7f04dc1514894f0900885fda4cfd47b4fd973ab0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

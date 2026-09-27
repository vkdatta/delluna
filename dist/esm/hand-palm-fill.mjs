export const name="hand-palm-fill";
export const id="dl_0c9f67a8f978480c9df7";
export const url=new URL("../icons/hand-palm-fill.svg?v=3bea1d26a30dbd96cd96d8ccce8404cd03628b434a304c5ebc5ee6552272c481",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

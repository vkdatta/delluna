export const name="sticker-bold";
export const id="dl_9318229c817846bc9b1f";
export const url=new URL("../icons/S/sticker-bold.svg?v=0c13e1ff9f0c9e1b48a62f3e43eba348bdfdeffd0265c869fad6548cac07db96",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

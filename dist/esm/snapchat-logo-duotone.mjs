export const name="snapchat-logo-duotone";
export const id="dl_b3ebf80e3c6438f15f70";
export const url=new URL("../icons/snapchat-logo-duotone.svg?v=b691c0506509655827335a52533d63426fab5da4642424e0b5aea314550ea8e0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

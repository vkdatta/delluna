export const name="phone_forwarded-fill";
export const id="dl_50c48a68c67b07399b0b";
export const url=new URL("../icons/phone_forwarded-fill.svg?v=001409ce88f0ac515a6c191791f3050ed3894d0fbb3719635916a6143195e71c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

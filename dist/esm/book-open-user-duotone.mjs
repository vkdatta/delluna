export const name="book-open-user-duotone";
export const id="dl_2293973717fd407999c9";
export const url=new URL("../icons/book-open-user-duotone.svg?v=864953a6d6144fc01622257e004f356d202d78c525087ddd0b9a325d78ff2286",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

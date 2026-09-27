export const name="bookmark_add-fill";
export const id="dl_99e4789a125016a79690";
export const url=new URL("../icons/bookmark_add-fill.svg?v=76f416a0174678150135869a3e0c6894f445cd2f064489f9f50ac955bc4c56a2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

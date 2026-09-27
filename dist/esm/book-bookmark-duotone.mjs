export const name="book-bookmark-duotone";
export const id="dl_906edeb711804e12aeea";
export const url=new URL("../icons/book-bookmark-duotone.svg?v=2775e0dc78d0936c928597709a77194a41fd370aaf2176f34d64695bcf1e3d26",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

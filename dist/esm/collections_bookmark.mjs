export const name="collections_bookmark";
export const id="dl_f3842459e470e5fab059";
export const url=new URL("../icons/collections_bookmark.svg?v=459687ccaa2020833465e0fb69b10ea2542d0edef501a9ce74e79f2f98cac91f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

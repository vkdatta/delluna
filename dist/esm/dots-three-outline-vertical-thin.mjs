export const name="dots-three-outline-vertical-thin";
export const id="dl_71e8447891a74d39a8f8";
export const url=new URL("../icons/dots-three-outline-vertical-thin.svg?v=f209a8fdee893c1fae2aed345800264c82c215a81e66bac5b8709165f7cd7962",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

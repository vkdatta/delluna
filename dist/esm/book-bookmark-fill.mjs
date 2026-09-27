export const name="book-bookmark-fill";
export const id="dl_06ad27f5e4f94ae89e6a";
export const url=new URL("../icons/book-bookmark-fill.svg?v=0ebcfda6d91db09526f11857fe2e0082fafcda20500378c9ce69d5b84c8e8e6f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

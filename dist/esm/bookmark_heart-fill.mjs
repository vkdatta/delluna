export const name="bookmark_heart-fill";
export const id="dl_8904860b2cf54b61959f";
export const url=new URL("../icons/B/bookmark_heart-fill.svg?v=469e638519f34ed3092787ed162959575a5f26a80c3c35ad33f83e67336822fe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

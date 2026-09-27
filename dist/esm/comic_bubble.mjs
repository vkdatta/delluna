export const name="comic_bubble";
export const id="dl_38c685a91a64f9681e0b";
export const url=new URL("../icons/comic_bubble.svg?v=46eebf614a8cfb8dcd2baf40ffeaf9ccaebbafc0f30008814b78b849142310a9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

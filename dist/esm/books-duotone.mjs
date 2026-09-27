export const name="books-duotone";
export const id="dl_2325a31a2dc448149d80";
export const url=new URL("../icons/books-duotone.svg?v=b2a776c318b3ed061f89a7a9621cc4c08180cf92250f28b7d4b2f5e0f5c6132d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="lucid_1-book-plus";
export const id="dl_64d2e0aa23324a6bb349";
export const url=new URL("../icons/lucid_1-book-plus.svg?v=5f40703d8c2031eeda16f499e9a657241a5c9cc06df58c6a43cc9edb7a13afb3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

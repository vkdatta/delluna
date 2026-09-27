export const name="collections_bookmark";
export const id="dl_7fa2f06d1ad34fe6fefd";
export const url=new URL("../icons/collections_bookmark.svg?v=5eeead96ef1d11af00c24bc2187a1df19a512ac29c88f5093c36ceddd922a8aa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

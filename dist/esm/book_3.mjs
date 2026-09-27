export const name="book_3";
export const id="dl_64348aeb23e90fccc3ca";
export const url=new URL("../icons/book_3.svg?v=3b9386093e0a63c02e1a74075d3361127cf7041feabf56c48628d504ad8a2be2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

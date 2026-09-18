export const name="book_2";
export const id="dl_70ffd42777744a20b570";
export const url=new URL("../icons/book_2.svg?v=38ab505223e8795f6197f4d3fbbdeda7c9a07cf992036a8d115b8aa73730a4f1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

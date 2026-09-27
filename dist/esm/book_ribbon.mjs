export const name="book_ribbon";
export const id="dl_410c71839e83e65a503b";
export const url=new URL("../icons/book_ribbon.svg?v=4fac1d0ff85f5d97d7fd50da34cc54bf3ec0e974cdc82a39fda5a3f6ae4db4e2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="book_6-fill";
export const id="dl_4e589bb2bb43c843e8a0";
export const url=new URL("../icons/book_6-fill.svg?v=5aa317e6c7053ff70e32839c53268dbdf6f07c28e517fa8fd6b9a237e9b35abd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="book_5-fill";
export const id="dl_3e76bd710e1c280113c8";
export const url=new URL("../icons/book_5-fill.svg?v=489023c3e63ff17362a30971978c3d2cfb168d4766f39f5fdd78ca5c646aa623",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

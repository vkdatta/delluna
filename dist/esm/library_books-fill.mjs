export const name="library_books-fill";
export const id="dl_8cfadb4fba81e82f55da";
export const url=new URL("../icons/library_books-fill.svg?v=837841b76a76f8a1b8dc617f7e52f94b26183ce46609cd4d255c87a0d7a2fdd9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

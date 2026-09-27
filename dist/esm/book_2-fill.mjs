export const name="book_2-fill";
export const id="dl_a7c69392fa2afd9d976c";
export const url=new URL("../icons/book_2-fill.svg?v=096d433a5745f80612805e8c09bfae5f5bba4b05a806073e71662793d0f190a8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

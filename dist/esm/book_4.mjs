export const name="book_4";
export const id="dl_0604eb379f524817d206";
export const url=new URL("../icons/book_4.svg?v=4d883ecda678cab0a881261cd66e89e23db10e8520521724aaad2ad214bb04ad",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

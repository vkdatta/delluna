export const name="book_3-fill";
export const id="dl_67a1b443765113c685d3";
export const url=new URL("../icons/book_3-fill.svg?v=dc12a4da77653851e7abea3cdb49f7d48e810603ff96ba9f94c4c71624026c03",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="book_6";
export const id="dl_69809368d42fa4c419c6";
export const url=new URL("../icons/book_6.svg?v=05b071f321e9ea73185b902d1fe670d0e2b83caf4c494c5aa42c9b5a3874b4e1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

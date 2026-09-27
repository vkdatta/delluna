export const name="book_4-fill";
export const id="dl_8ab10d26a3a1819371fc";
export const url=new URL("../icons/book_4-fill.svg?v=6ff69ba6be0116f11afad592a51e116a62f19073bbfe8f0c2e20a19d4921aa72",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

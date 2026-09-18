export const name="book_4-fill";
export const id="dl_23166e50753d43329bbf";
export const url=new URL("../icons/book_4-fill.svg?v=9c477b6ac07d1b6d805e6b4afb8385d56d5c59d553888c6dffd435c82f4a1eb0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

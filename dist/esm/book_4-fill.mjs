export const name="book_4-fill";
export const id="dl_04131d1af6cbc0e9733a";
export const url=new URL("../icons/book_4-fill.svg?v=24f0c8c280c432aa83d556442e3c672a055052043fb4bc6f72f93a5a36d47e50",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

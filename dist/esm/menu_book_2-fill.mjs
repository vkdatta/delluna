export const name="menu_book_2-fill";
export const id="dl_d937a136cc14bf483589";
export const url=new URL("../icons/menu_book_2-fill.svg?v=50631f5ee8eae7da692014f1a056e607704dde61dfa76c3c65c675b7d39c7204",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

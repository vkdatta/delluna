export const name="menu_book-fill";
export const id="dl_27d5831a62dec82aa11a";
export const url=new URL("../icons/menu_book-fill.svg?v=100c39ae6b1f45af549315259c6e636fa8f781a457bffc98ba00b6263cf8d7f3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

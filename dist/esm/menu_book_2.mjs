export const name="menu_book_2";
export const id="dl_2122df9316e9504cf471";
export const url=new URL("../icons/menu_book_2.svg?v=388d970f3ff717dc94852173fc0afaa3d5188f7dcb5602b6882a7417e67bfaec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

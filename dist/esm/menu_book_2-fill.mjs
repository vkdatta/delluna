export const name="menu_book_2-fill";
export const id="dl_5c7c94f12e568e99e69e";
export const url=new URL("../icons/menu_book_2-fill.svg?v=e8828f62f6b9d353473b15e6f457713583fa7bb9ead0632b696d6607b9dac209",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

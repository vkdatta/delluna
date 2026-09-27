export const name="menu_book";
export const id="dl_500e4df0bd09bcffe0c1";
export const url=new URL("../icons/menu_book.svg?v=e06135a6f4d0836751fad1076e8e023d09b636e6304e38ad009c82ad4b757799",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

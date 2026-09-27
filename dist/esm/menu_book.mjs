export const name="menu_book";
export const id="dl_81eac2b5eadb4f31de05";
export const url=new URL("../icons/menu_book.svg?v=d3ea5e1e1bab172afee44538dddaeddb832c8bace4c9caa0ed9053e3e191f33f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

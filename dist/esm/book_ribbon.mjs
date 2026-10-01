export const name="book_ribbon";
export const id="dl_bfd524a3d40a7a70b6a8";
export const url=new URL("../icons/book_ribbon.svg?v=8ac53c49511c20b097f3c41ea6aa761af35f8f99bdccabe1411e802bc880412a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

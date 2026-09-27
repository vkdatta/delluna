export const name="search-add";
export const id="dl_606ad7a52d4f12546fc4";
export const url=new URL("../icons/search-add.svg?v=445e0c77203973fc935b225635bbaa536079a9fa11ee6374addddc3ed51709d9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

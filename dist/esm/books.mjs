export const name="books";
export const id="dl_bf57ce3847844f80b818";
export const url=new URL("../icons/books.svg?v=2c6996318774d46ed511fd3b619acc850fd704559b8427182900bed0ab2fca29",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

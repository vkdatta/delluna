export const name="category-shapes";
export const id="dl_6898fa0f3b569b294834";
export const url=new URL("../icons/category-shapes.svg?v=2c01450b67417403ae3ca8094fc6e9a1cb07f8d8216653325e920f18650cdaf2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="rows-plus-bottom";
export const id="dl_b811c5027ee04713901c";
export const url=new URL("../icons/rows-plus-bottom.svg?v=373720bad791fffb36d28cf6a5519b5fe3c21f493589c246f6b8bc3c20459bc3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

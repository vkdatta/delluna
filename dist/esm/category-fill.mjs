export const name="category-fill";
export const id="dl_9ffe9bf8ddc548a2f6b9";
export const url=new URL("../icons/category-fill.svg?v=5b04b43037adf75bb8d94df836d8255a5d6b8d95af1436bc40eae6443ee23d91",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

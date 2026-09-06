export const name="book-bookmark-duotone";
export const id="dl_906edeb711804e12aeea";
export const url=new URL("../icons/book-bookmark-duotone.svg?v=fd3df771fbd0d671e4c1cba526427930995965851650cf91b40a2f09011f4f2b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

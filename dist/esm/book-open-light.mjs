export const name="book-open-light";
export const id="dl_f2d44744a56b40f4a1ab";
export const url=new URL("../icons/book-open-light.svg?v=b7b13a145b236cc573434ce57a6e9a55157fe9583865eccc9ef0726fff5c4895",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

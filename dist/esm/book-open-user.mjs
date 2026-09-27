export const name="book-open-user";
export const id="dl_f0ba3089b3864f9589ba";
export const url=new URL("../icons/book-open-user.svg?v=0ef6483a4baca134fe63d2468665b12ea3ae34c2fc3bf8c082119169b5f596b8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

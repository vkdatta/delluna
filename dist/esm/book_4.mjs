export const name="book_4";
export const id="dl_da33ff0e986e19b6dd76";
export const url=new URL("../icons/book_4.svg?v=1b96120227e54e8b0d2ba21993dc32f4be7830cc567836a7f75afd0c97f4d670",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

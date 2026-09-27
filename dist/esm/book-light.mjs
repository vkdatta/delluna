export const name="book-light";
export const id="dl_4bb111efda844a8680cd";
export const url=new URL("../icons/book-light.svg?v=6c89ad65517fe6b6125e1724b7ab7076b1cd6683e9aa447ac0226243990db24b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

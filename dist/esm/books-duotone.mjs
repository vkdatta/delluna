export const name="books-duotone";
export const id="dl_2325a31a2dc448149d80";
export const url=new URL("../icons/books-duotone.svg?v=4aaa34c3ac50c669571d2fc29a99cbfef5aa155db27c8da911c4916ed71140b5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

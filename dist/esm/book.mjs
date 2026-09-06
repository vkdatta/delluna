export const name="book";
export const id="dl_d4156804ceb84606a76b";
export const url=new URL("../icons/book.svg?v=7936a8bee1cb7dbfe0737ba0bc6d65c0ee8b73debf68a67331ef817017ec1ade",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

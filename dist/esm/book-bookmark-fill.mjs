export const name="book-bookmark-fill";
export const id="dl_06ad27f5e4f94ae89e6a";
export const url=new URL("../icons/book-bookmark-fill.svg?v=fb80df3bcbdfe3448346665319ae884d42b139a1e135f594ba341e372aa18ecd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

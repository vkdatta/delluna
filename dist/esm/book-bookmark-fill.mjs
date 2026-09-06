export const name="book-bookmark-fill";
export const id="dl_06ad27f5e4f94ae89e6a";
export const url=new URL("../icons/book-bookmark-fill.svg?v=a4b32d60cccb87a38eff0087425d97060069d92cc60baf6e7804af629d6f1b98",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

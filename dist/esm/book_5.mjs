export const name="book_5";
export const id="dl_fd003563ceb5c987c6f5";
export const url=new URL("../icons/book_5.svg?v=f6bb9c5ab008d3c60588954bc6f4dbade02158479bf72de273e80fe4ea891fd4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

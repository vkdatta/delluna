export const name="book_5";
export const id="dl_f7cebec16c87453cb897";
export const url=new URL("../icons/B/book_5.svg?v=02c3d8a5e7126a3c49dced6f0ecbf22b29f918485a58c3728313d71493cfb814",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

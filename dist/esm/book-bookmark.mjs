export const name="book-bookmark";
export const id="dl_5f38fb4bb4ec4c429256";
export const url=new URL("../icons/book-bookmark.svg?v=ca4cd8a5383e6863699fcb5c30d6568f9b4a5948a43c94afb6c9a9142c966f16",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="book-bookmark";
export const id="dl_5f38fb4bb4ec4c429256";
export const url=new URL("../icons/book-bookmark.svg?v=c1927c9bcc5a57d04a238c80cf4e035b361e80e34277125d6f69bf32f373f64d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

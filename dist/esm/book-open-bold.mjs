export const name="book-open-bold";
export const id="dl_f6bcc56343494b77aada";
export const url=new URL("../icons/book-open-bold.svg?v=f21cbbedf4f7bdf77b5cde041ce1b91fa49a37bf9e8bb302dcf39d98f3821b0a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

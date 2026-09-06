export const name="book-open-user-fill";
export const id="dl_0ecea526da324ec7adeb";
export const url=new URL("../icons/book-open-user-fill.svg?v=d89461025e6c843da5d48526378fc7c0d9ac206e74308812dceb69ad791aa413",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

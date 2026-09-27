export const name="book_4";
export const id="dl_04423239fd306db56dcc";
export const url=new URL("../icons/book_4.svg?v=7cb6b3153f77ab8e674789a97ff97a6aebcc047a93fc557bbbd0e12bf59b4c8f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

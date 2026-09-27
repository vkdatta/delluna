export const name="book-open-bold";
export const id="dl_f6bcc56343494b77aada";
export const url=new URL("../icons/book-open-bold.svg?v=48cccb35efeb9684356a22b67bec9031d81369ab8ed2b69a1624449c3b5be815",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

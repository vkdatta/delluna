export const name="book_ribbon";
export const id="dl_8ec0aff7daeb2a560146";
export const url=new URL("../icons/book_ribbon.svg?v=d1401bb2ff4bd6cb653c19e04c8db3072ee65901217bd284ffd172586c964c9c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

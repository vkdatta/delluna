export const name="book_ribbon";
export const id="dl_325d316c7c8c55300ec3";
export const url=new URL("../icons/book_ribbon.svg?v=1573544df8fec3711c14d5a3956c5f6eb8565522fd76f8e4723d2fd31a059322",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

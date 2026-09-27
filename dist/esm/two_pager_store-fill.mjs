export const name="two_pager_store-fill";
export const id="dl_d896c9feada12d2f9f35";
export const url=new URL("../icons/two_pager_store-fill.svg?v=d19aee63a07f1e06177b9d7532f3e9891da69e1f8711d36d4afbf2006587e47b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

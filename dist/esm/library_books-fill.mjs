export const name="library_books-fill";
export const id="dl_33fd5bbdb04d4ebaaf31";
export const url=new URL("../icons/library_books-fill.svg?v=18098ebe321a9bb2d3233542d892c5e5eaa40063397ca8768313dcb546616a45",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="library_books";
export const id="dl_ad80424d7aa5ed40b550";
export const url=new URL("../icons/library_books.svg?v=2653b43e07c3ad2d167c706453f09fa6e937dc55c33c0047c121e438b200709f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="book-open-duotone";
export const id="dl_fd0417010aa34da29897";
export const url=new URL("../icons/book-open-duotone.svg?v=114456d637f78d1a748ef70768d3635c8f927fdfeed095a4ca9ded6f975ab8f5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

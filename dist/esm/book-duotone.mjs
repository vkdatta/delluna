export const name="book-duotone";
export const id="dl_7c25a9288669402a8028";
export const url=new URL("../icons/book-duotone.svg?v=61e7b490d9dba1235c800823b8d876686597aa33b40d5e345f607af99725d41a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

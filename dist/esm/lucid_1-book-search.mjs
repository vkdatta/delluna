export const name="lucid_1-book-search";
export const id="dl_861636defcf9401e81c5";
export const url=new URL("../icons/lucid_1-book-search.svg?v=09cfe5bedfb6fc8f18140f023e28c3599700f40713840db1f203e195b19c18b8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

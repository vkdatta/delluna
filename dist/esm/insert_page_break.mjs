export const name="insert_page_break";
export const id="dl_c76513e3be70639c0bee";
export const url=new URL("../icons/insert_page_break.svg?v=239ca894589010172078c2ab1c59ab42a8c27cd1498f902c149744e339827516",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

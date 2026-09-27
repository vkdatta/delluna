export const name="table_large";
export const id="dl_65990266a606fbafcb58";
export const url=new URL("../icons/table_large.svg?v=da632062df712558c8807c15be85b644041736c0b222c0312ea675e8a956f6c5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

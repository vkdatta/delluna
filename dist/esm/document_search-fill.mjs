export const name="document_search-fill";
export const id="dl_7bbd01ed7d21d346dfe8";
export const url=new URL("../icons/document_search-fill.svg?v=491a2e87cda45a8d4add2f210f655fdb3c8637a6f296102f5622cba5be884e1e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

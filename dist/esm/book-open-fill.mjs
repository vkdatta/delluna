export const name="book-open-fill";
export const id="dl_320644072af84426a782";
export const url=new URL("../icons/book-open-fill.svg?v=869e2b75ba601a2915731ac86a52b72110da309b048173ff45400e75e37799ce",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

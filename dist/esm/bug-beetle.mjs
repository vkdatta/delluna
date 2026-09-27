export const name="bug-beetle";
export const id="dl_ead35ac7f54e49ef8eb3";
export const url=new URL("../icons/bug-beetle.svg?v=a0ee60696bc578666e1f5ea83f5365cb861b3b8c49973624d552b992dfb5d54a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

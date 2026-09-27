export const name="file-image";
export const id="dl_5534752387284867ad19";
export const url=new URL("../icons/file-image.svg?v=da041b054e38c87d50be0ab0a4872b67f13091aadfb795de846c3fd115cc7296",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="picnic-table-fill";
export const id="dl_f0ed82f0a9234cd78bbc";
export const url=new URL("../icons/picnic-table-fill.svg?v=662d0a5413d056d56b2d7de5d2ad0c06967d248e765173870e7ec039d9a07e31",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="picnic-table-fill";
export const id="dl_f0ed82f0a9234cd78bbc";
export const url=new URL("../icons/picnic-table-fill.svg?v=99b8c09fdfa0a66cdc84e7b6a8be6b268ca5137dea3f099bc827f5fe0f2d5195",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

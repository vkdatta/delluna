export const name="sort";
export const id="dl_018d4742825e7a6e7b97";
export const url=new URL("../icons/sort.svg?v=d22f5f09345036c5d5a23a24e1801495e937614ddcee14ae52804799bc5c384b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

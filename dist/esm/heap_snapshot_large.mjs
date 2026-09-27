export const name="heap_snapshot_large";
export const id="dl_bae30be3991cecd5cbc1";
export const url=new URL("../icons/heap_snapshot_large.svg?v=7bbb6d598c7a88b8ca313f9f49f563a9477594a80beae9635a8832d499bf6fbe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

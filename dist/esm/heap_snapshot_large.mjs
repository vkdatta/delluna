export const name="heap_snapshot_large";
export const id="dl_e2b8a0a6dc254fe0b6a1";
export const url=new URL("../icons/heap_snapshot_large.svg?v=b38ba3ee21ae1ef3639c331b5f07f6dbae06d8b0e536adf0c303dfd6f36b2f1b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

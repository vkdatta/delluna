export const name="heap_snapshot_thumbnail";
export const id="dl_a3999e2fcc056242f237";
export const url=new URL("../icons/heap_snapshot_thumbnail.svg?v=58b23ca2a8ed30017d30a09254b39bb2ecbc8e57a2f2ea1a66ae134d94b364c9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

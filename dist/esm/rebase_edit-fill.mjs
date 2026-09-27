export const name="rebase_edit-fill";
export const id="dl_31de978f49da2b73c486";
export const url=new URL("../icons/rebase_edit-fill.svg?v=15dd3d46c826eebfb06908fcb377f6994259308031f480c1f8343e199bef03af",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

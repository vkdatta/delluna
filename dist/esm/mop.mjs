export const name="mop";
export const id="dl_a726e730b0978b4aea5b";
export const url=new URL("../icons/mop.svg?v=67cf4fe21c333b8bcbeb97071448f664f416fb4b0891459fc4ba52dddeae0897",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

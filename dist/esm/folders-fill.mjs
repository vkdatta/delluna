export const name="folders-fill";
export const id="dl_bec0536361364332b2e5";
export const url=new URL("../icons/folders-fill.svg?v=bd74b895d04b3741266443dba716725c356ae0259af360ab1177777d0cc02efb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

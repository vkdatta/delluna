export const name="group_search";
export const id="dl_f8511f3f20ee3e16eb20";
export const url=new URL("../icons/group_search.svg?v=8a12828267c0c85d0fb9a62f9bab05b23d537e7fa0154d64a70fed883fd117a4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="document_search-fill";
export const id="dl_e0f948a016fe4f3b222f";
export const url=new URL("../icons/document_search-fill.svg?v=1f3cb8aa90bd0422194b8c68273b293fc26519a85220f04e9b83fc56ed27f0e4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

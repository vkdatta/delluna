export const name="manage_search";
export const id="dl_917025c582d9275089a9";
export const url=new URL("../icons/material_symbols/manage_search.svg?v=922f69589202a290f52c25f1354a73180d7826597148d9cfb44478aef896f5f1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="unknown_document-fill";
export const id="dl_80d8b2fad61e480a8886";
export const url=new URL("../icons/unknown_document-fill.svg?v=fb21be765c8afebb7c64881a081c86d5edfcf866199541e68f18cc5375fd759f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

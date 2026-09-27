export const name="manage_search";
export const id="dl_8927026ff902e70f29bc";
export const url=new URL("../icons/material_symbols/manage_search.svg?v=dd91002c75776cb24fb02b0be70dd87af0a10f87dbf29ced1cb00eeb0e062737",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

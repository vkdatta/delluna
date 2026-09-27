export const name="arrow_top_right-fill";
export const id="dl_432ba4efbdd46348188e";
export const url=new URL("../icons/arrow_top_right-fill.svg?v=09cb3e5b24b5bd4e31759e8b0101819040dba1be8e89663a5c6ce6b414b9a8e9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

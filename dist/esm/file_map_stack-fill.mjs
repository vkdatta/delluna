export const name="file_map_stack-fill";
export const id="dl_1dbc650212c545880b82";
export const url=new URL("../icons/file_map_stack-fill.svg?v=9b8195d36ada1feff844c494ac0c7970cacc94c9eae00b1a8e11107313e207ac",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

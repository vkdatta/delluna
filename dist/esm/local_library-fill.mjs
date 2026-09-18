export const name="local_library-fill";
export const id="dl_ed3ca05e86cb4c0a8601";
export const url=new URL("../icons/L/local_library-fill.svg?v=4c002675660f510b1628a135c0a91c09e381681dee82a59129b91b51ba2fc45e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

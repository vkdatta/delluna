export const name="page_header-fill";
export const id="dl_a2609cc236528130f35a";
export const url=new URL("../icons/page_header-fill.svg?v=0cf512a8524b1b870221ba4baa517df41ee3fa327279242843ea07d9f45e26be",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

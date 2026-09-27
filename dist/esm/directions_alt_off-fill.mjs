export const name="directions_alt_off-fill";
export const id="dl_83e1e48a7f2141502dc8";
export const url=new URL("../icons/directions_alt_off-fill.svg?v=6bae02dd647674b20d6608cab154064f4cb5c161c58f7b23b648891bd8175729",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

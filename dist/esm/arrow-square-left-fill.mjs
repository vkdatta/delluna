export const name="arrow-square-left-fill";
export const id="dl_056bbcbf30db44b49f74";
export const url=new URL("../icons/arrow-square-left-fill.svg?v=19343dd8b179a288d3b4739c2a91f33b8fe66f9dc7bd833b4e04be19b2d7fd92",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

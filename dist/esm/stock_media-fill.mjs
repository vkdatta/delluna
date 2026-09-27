export const name="stock_media-fill";
export const id="dl_7ccaba2209a8cb37c02e";
export const url=new URL("../icons/stock_media-fill.svg?v=c5323d0c7f626b3d5a8674c61c473c9f5d271597c0351ad85198319c3708855f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

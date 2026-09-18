export const name="receipt_long-fill";
export const id="dl_af8126f26b6649038ede";
export const url=new URL("../icons/R/receipt_long-fill.svg?v=4a91db471cf0a3cc0cd3fda571c51cce221cb11ea27bc345f3f1f49851f2dbfb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

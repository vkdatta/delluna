export const name="reviews-fill";
export const id="dl_8413ca302af84ddf945a";
export const url=new URL("../icons/reviews-fill.svg?v=45a931fb5a08bc20d975084d0a78ca9722df781911ac9191353d5eb6df057521",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

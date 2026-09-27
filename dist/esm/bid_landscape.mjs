export const name="bid_landscape";
export const id="dl_0406735d04bc81e6cc19";
export const url=new URL("../icons/bid_landscape.svg?v=d633db57434c1e5129d1579dc4b743eaafd7b67d0dc5383f833d4de5b27c03da",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

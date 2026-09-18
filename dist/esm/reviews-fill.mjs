export const name="reviews-fill";
export const id="dl_962d457a86444d5ab514";
export const url=new URL("../icons/R/reviews-fill.svg?v=f80015da3607a9ae985140c73048010930b78b99db40045770520aa420a6a947",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

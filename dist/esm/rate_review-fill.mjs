export const name="rate_review-fill";
export const id="dl_4af02e749f5c4e058f0e";
export const url=new URL("../icons/R/rate_review-fill.svg?v=3fb8bcdd1cf1c51fa235bb6026e52c15c386f3ac928928c5cdbc26e87a0f3160",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

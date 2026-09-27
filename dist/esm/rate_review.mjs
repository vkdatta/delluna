export const name="rate_review";
export const id="dl_6e43d42f5863f0aa412f";
export const url=new URL("../icons/rate_review.svg?v=9f1d286f1568f0956dfc0af6cd02d19246548716b678c8402f1f9d4968481184",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

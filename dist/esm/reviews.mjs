export const name="reviews";
export const id="dl_820d851e5e0e4fb4b333";
export const url=new URL("../icons/R/reviews.svg?v=8c4e5991ffccbaf5a752cb4af1c0ff7b3647f5a27f673091f14918863e46c837",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

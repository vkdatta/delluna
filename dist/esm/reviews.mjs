export const name="reviews";
export const id="dl_167ac6a6104e929d767b";
export const url=new URL("../icons/reviews.svg?v=8c4e5991ffccbaf5a752cb4af1c0ff7b3647f5a27f673091f14918863e46c837",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="money_bag-fill";
export const id="dl_463efaeae5d709a5e90e";
export const url=new URL("../icons/money_bag-fill.svg?v=0f137745b7f417a9e720592e2bf29fc971c60781430d0cdf4df645971e03a268",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

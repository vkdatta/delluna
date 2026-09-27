export const name="lucid_3-shuffle";
export const id="dl_1d5e4a99a6084bb086e9";
export const url=new URL("../icons/lucid_3-shuffle.svg?v=c478b0f15c9f27b9cc1a641ff2f4dd2c84220c79b25c956a91e7f3947e8ade95",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

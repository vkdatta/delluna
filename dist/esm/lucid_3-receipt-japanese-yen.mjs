export const name="lucid_3-receipt-japanese-yen";
export const id="dl_c5caff52cd23455585fa";
export const url=new URL("../icons/lucid_3-receipt-japanese-yen.svg?v=c673339d8fe6a0260b7bdf074b6279d7551a0610f99ec297d082a5ebbe14d333",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

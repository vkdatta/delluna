export const name="bid_landscape_disabled-fill";
export const id="dl_74e33bec0091a81fed91";
export const url=new URL("../icons/bid_landscape_disabled-fill.svg?v=ec8e2bd692a77ab22775f193149679ee56df7b1aaf8c452f4bc4588c57eae1f5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

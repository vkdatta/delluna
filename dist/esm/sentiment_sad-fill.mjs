export const name="sentiment_sad-fill";
export const id="dl_c07a991102f75ff07a47";
export const url=new URL("../icons/sentiment_sad-fill.svg?v=11e8592ca96cc8c3b243f0e710efc198b48536ca1a0dc06cdc6002529bc5022b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

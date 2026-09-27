export const name="domino_mask-fill";
export const id="dl_f7f154a0d306fe98a58f";
export const url=new URL("../icons/domino_mask-fill.svg?v=4de9b865567ddf8bdfc171c09008f504c29e080e7b56fac8e0297babdb75925c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="rate_review";
export const id="dl_e3d858704e56c678a9ca";
export const url=new URL("../icons/rate_review.svg?v=7fa231e5b77c089e070da6af92f41fcb1a8d1bbe1e4467ba14878e7aff3caf91",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

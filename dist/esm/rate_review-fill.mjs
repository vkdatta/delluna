export const name="rate_review-fill";
export const id="dl_1ed840622890ed667016";
export const url=new URL("../icons/rate_review-fill.svg?v=92b716872982e40cf4b23e9f14578481701473995b83f090ba1b677ba9b32053",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

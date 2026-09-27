export const name="grid_guides-fill";
export const id="dl_540e2b8d8679ec3c39a2";
export const url=new URL("../icons/grid_guides-fill.svg?v=a9ff5052a7cf86b3fe5f6d8ea4f6ba570fac532f449f64d6f81086e4eb20c8bc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

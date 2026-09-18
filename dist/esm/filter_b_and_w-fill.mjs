export const name="filter_b_and_w-fill";
export const id="dl_c57982dacc674327aa4a";
export const url=new URL("../icons/filter_b_and_w-fill.svg?v=7813c463491ff13b5ea4d2e384a6b9abf387f1036728e9a335a79ba45f45f56b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

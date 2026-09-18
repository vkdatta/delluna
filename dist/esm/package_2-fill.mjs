export const name="package_2-fill";
export const id="dl_5ebeced5f2984f6189ab";
export const url=new URL("../icons/P/package_2-fill.svg?v=dfe377f9aa96acb75ae90c99d6e43aaba2e1d0865c110ae1237779bfa7af8828",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

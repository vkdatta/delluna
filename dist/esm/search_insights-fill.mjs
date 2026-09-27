export const name="search_insights-fill";
export const id="dl_0f37cc7ec0863054d0dd";
export const url=new URL("../icons/search_insights-fill.svg?v=a1753a5c1867c4471e8ce62a5efa257feb665d858e2039f33740e5d1d52da8c9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

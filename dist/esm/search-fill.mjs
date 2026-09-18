export const name="search-fill";
export const id="dl_ed8b7a75daec4ac49658";
export const url=new URL("../icons/search-fill.svg?v=16f9192bb2593c0069b8e7df1d0e36be632035949a20fa4db5530de1d4f8fefb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

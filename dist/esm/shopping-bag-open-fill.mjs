export const name="shopping-bag-open-fill";
export const id="dl_3885f51aac734c85e354";
export const url=new URL("../icons/shopping-bag-open-fill.svg?v=f24b0a1cb046b1e12ee649b40cb2084cba1838fd4a94a35531ef54e682a0ae53",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

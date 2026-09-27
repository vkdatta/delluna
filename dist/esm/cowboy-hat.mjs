export const name="cowboy-hat";
export const id="dl_13daa67d938146dca83e";
export const url=new URL("../icons/cowboy-hat.svg?v=1162d2febe122cbcbcaea0a00a5c91f849196752c834bc8f2a861dfceb208195",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

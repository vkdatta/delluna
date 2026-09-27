export const name="lasso";
export const id="dl_faa967a5e0ae42f6ba9c";
export const url=new URL("../icons/lasso.svg?v=30cc2db664ee13f5c375322b8eb744d92a0f7b62961fdecf6fd14b370ebeb3a0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

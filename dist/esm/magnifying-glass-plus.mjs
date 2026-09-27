export const name="magnifying-glass-plus";
export const id="dl_e9cf2c2b96ef4e81990e";
export const url=new URL("../icons/magnifying-glass-plus.svg?v=d664a7de69f77e5a42ba2ca2c3b406536f0a345f09cdf21a196265b692986c51",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="lucid_2-lasso";
export const id="dl_ef4a38ccabad4573952f";
export const url=new URL("../icons/lucid_2-lasso.svg?v=14bf9265ffdf44c64c15d0342d3494f299cd4ba030181738a81947e1604a9eea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

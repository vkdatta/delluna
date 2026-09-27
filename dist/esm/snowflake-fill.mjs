export const name="snowflake-fill";
export const id="dl_179ed063c35366e3e5ad";
export const url=new URL("../icons/snowflake-fill.svg?v=f3172f86d5cdb16fcc43522513394906588c0d7a975bbbb6e3bddafefbc894d6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

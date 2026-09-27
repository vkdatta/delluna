export const name="hard-hat-fill";
export const id="dl_3f164166f73542caa996";
export const url=new URL("../icons/hard-hat-fill.svg?v=e7be4cee4e61d9e623213682da6e58b1be56f75a237cd9d43cde18e7d130d8e0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

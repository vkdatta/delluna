export const name="stack-plus-fill";
export const id="dl_d8d6541494c460ae9bc4";
export const url=new URL("../icons/stack-plus-fill.svg?v=0e7da3bb005aba95acb4e9c6eef1301122411d1234d6ac924f1589f60b906d87",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

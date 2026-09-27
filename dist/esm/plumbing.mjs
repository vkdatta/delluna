export const name="plumbing";
export const id="dl_6115bfbe300280cbc71f";
export const url=new URL("../icons/plumbing.svg?v=3b36c7b8223eea67a7677be456e115f866892f4bc3b1e1441373bb2dd5eb4291",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

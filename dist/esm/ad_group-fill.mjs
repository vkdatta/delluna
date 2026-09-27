export const name="ad_group-fill";
export const id="dl_806bb613c796b50826f2";
export const url=new URL("../icons/ad_group-fill.svg?v=2d4bef0d45ced95a4e7f792326af38de78f6daf82f1365e35763d8d1fa59d142",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

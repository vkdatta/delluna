export const name="brandy-light";
export const id="dl_471320c1f94445a6ad03";
export const url=new URL("../icons/brandy-light.svg?v=5720ddb782f58f368f52eaced4dcfdad340c389810720de5745380fe63b40791",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

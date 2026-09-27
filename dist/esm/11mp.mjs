export const name="11mp";
export const id="dl_254083282d4203d8fb7c";
export const url=new URL("../icons/11mp.svg?v=63bf2895864d8c8b12cda35dab6b7866906432cfa550264ebd4571e012efb81c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

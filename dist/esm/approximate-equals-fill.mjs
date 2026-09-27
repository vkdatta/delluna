export const name="approximate-equals-fill";
export const id="dl_f2ddb7dbb28d4817babc";
export const url=new URL("../icons/approximate-equals-fill.svg?v=b90242ead1f3b8bba3a77797dd14ddc67a99149d6c36a2a2a01f1dca5ea928c5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

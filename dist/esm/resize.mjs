export const name="resize";
export const id="dl_7983bdd62f314a00bcee";
export const url=new URL("../icons/resize.svg?v=9c7812c3289ce30a30b81576970440904584e0b939268684149b9aecc4dcd1f8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

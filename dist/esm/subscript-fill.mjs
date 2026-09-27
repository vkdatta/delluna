export const name="subscript-fill";
export const id="dl_209ba3710f47a8d9128f";
export const url=new URL("../icons/subscript-fill.svg?v=9f49ce3e600f27a4708627c3741401bb404b4fa2b2005d1cdf9b6ec360a7cc96",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

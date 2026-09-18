export const name="imagesearch_roller";
export const id="dl_59ba6bf5557346749ef0";
export const url=new URL("../icons/I/imagesearch_roller.svg?v=9b166751532c24a883401a6674cc4ae2ee59748dd3ab238e49c783ee35c43dd5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

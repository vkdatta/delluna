export const name="popcorn-duotone";
export const id="dl_69eda44fe86c4a7dbb43";
export const url=new URL("../icons/popcorn-duotone.svg?v=2b2017b87299c7f89ce86f012a205c65358d4af0392182cf86b0c555f2ba19a9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

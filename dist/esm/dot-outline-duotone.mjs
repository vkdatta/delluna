export const name="dot-outline-duotone";
export const id="dl_fc29e9556bdf425fbed6";
export const url=new URL("../icons/dot-outline-duotone.svg?v=632c8328aabc42afef4637f49a140ed707cc19f16ee09567a243615fd7023ab0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

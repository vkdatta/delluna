export const name="arrows-left-right-light";
export const id="dl_0ab7f92b21fe481498c2";
export const url=new URL("../icons/arrows-left-right-light.svg?v=273b432083122e646e38270be03c7d661eb9f06e1588b51439a3adea1303d976",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

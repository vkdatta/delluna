export const name="document_scanner";
export const id="dl_a8be5f6972367195bb25";
export const url=new URL("../icons/document_scanner.svg?v=947ab8a598fce7fd5d2df115c3ac7ef8473aba7290e6a53fa9cd9d0a7fc896ca",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

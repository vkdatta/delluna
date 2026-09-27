export const name="selection-inverse";
export const id="dl_5625be49a3845e7f5724";
export const url=new URL("../icons/selection-inverse.svg?v=c22d9ae0df26e5d8e9a9cc816b527296eab5aa1af27db62be7dee36a6e494234",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="document_scanner";
export const id="dl_f92443da1d8cf9f156d8";
export const url=new URL("../icons/document_scanner.svg?v=fc9e2f6104595015029f4fa0d5369828815c2c8f57b28b6f53f56dc99a1a640b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

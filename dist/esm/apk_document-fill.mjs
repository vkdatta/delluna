export const name="apk_document-fill";
export const id="dl_8b2322ac9cdd492084d1";
export const url=new URL("../icons/apk_document-fill.svg?v=330be7ae60df625401f23bcbf227e35ef6bda5461a0c51b0056e37173cb0fe5b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

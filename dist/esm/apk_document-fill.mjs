export const name="apk_document-fill";
export const id="dl_8aad06ec5de2d069b72f";
export const url=new URL("../icons/apk_document-fill.svg?v=95fc1dd7c77fcdeea0307fb6a4b414ddc1b586736ab893ffc0ca515c891a2d6b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

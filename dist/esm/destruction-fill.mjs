export const name="destruction-fill";
export const id="dl_2e8f241dc76143269386";
export const url=new URL("../icons/D/destruction-fill.svg?v=2a2d1566ef9267d502e264685ef089a664f1604a2a4709eb5760fe2489a1fefc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

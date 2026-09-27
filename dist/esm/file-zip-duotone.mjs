export const name="file-zip-duotone";
export const id="dl_5d3ce550156347f5ad5a";
export const url=new URL("../icons/file-zip-duotone.svg?v=2541964f1d7e44c0332931e51566d5960a897c32e6273890db15800c4a1c1e50",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

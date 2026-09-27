export const name="file-doc-duotone";
export const id="dl_c8f90c3bb70047f1a8e2";
export const url=new URL("../icons/file-doc-duotone.svg?v=057906bee81afded70f6fa37615f6f8c225648da9f2389a8619797c32e863266",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

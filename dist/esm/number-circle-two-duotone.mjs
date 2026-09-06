export const name="number-circle-two-duotone";
export const id="dl_52c9e8e674984759902d";
export const url=new URL("../icons/number-circle-two-duotone.svg?v=a89dec7bb1f993f756556aa57273a0b537bd72e17bd5aebdcf9a75508cfb177a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

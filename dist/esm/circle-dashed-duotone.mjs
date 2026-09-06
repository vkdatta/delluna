export const name="circle-dashed-duotone";
export const id="dl_a08c2248e7cf4465b518";
export const url=new URL("../icons/circle-dashed-duotone.svg?v=ad1a5b9234a237ea81c2559f5dfceae399ce5072ab30a2efeec0125079a4900e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

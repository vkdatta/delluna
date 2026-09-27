export const name="swatches-duotone";
export const id="dl_3a9b00e00c8a68cca5d8";
export const url=new URL("../icons/swatches-duotone.svg?v=bc07dbbc3bfc7cedc31540e9ac9510e87b4e7d644b45084e35f95a1ecfc15c36",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

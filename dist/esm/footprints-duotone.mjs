export const name="footprints-duotone";
export const id="dl_fa5eb98ebe0441a891b0";
export const url=new URL("../icons/footprints-duotone.svg?v=5f3173eff804a99ed9ae2507b0d526f03229a087f2fc05aff55eeadd17102ddb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

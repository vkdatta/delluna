export const name="tractor-duotone";
export const id="dl_57604aebdbc6625d272e";
export const url=new URL("../icons/tractor-duotone.svg?v=d3d49788fa8ab6de15652f978893b631c65ea97fff0aecd703ddca694e5455ea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

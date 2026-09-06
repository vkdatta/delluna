export const name="eyedropper-duotone";
export const id="dl_850f92ef3545496c8718";
export const url=new URL("../icons/eyedropper-duotone.svg?v=4a397eadada7af0e6f23593f5909c90b95c2d79afbfbd5c0465037845d763e63",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="radio-button-duotone";
export const id="dl_e06d2d6af24b49f0895f";
export const url=new URL("../icons/radio-button-duotone.svg?v=d3120606f5848e690436505c7f5f016cdc38b305345767e414aebe77bf0ce683",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="globe-stand-duotone";
export const id="dl_ff74581df9394ae4998f";
export const url=new URL("../icons/globe-stand-duotone.svg?v=4e18e32b055a09915f2695e90737a9c3274ba7500316d484c16e384adc92b2d3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

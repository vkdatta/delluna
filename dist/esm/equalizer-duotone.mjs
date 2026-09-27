export const name="equalizer-duotone";
export const id="dl_938ab762ed27419fbb30";
export const url=new URL("../icons/equalizer-duotone.svg?v=b0fbd1fa2ba4836c321c2eed19b107b649862dd1fcaf7342656c31f95472d3c9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

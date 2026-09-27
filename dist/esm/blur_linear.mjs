export const name="blur_linear";
export const id="dl_865a3608e8f50cd00aea";
export const url=new URL("../icons/blur_linear.svg?v=477f8897f0d656cac61ce65f68e17bfc9fa5963549525d33efaf5c956dbdd8b7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="bandaids-bold";
export const id="dl_500de3a3379944958ef0";
export const url=new URL("../icons/bandaids-bold.svg?v=e4796e7a57e7019f2f628faf3f0e36104c22bff690241d31218ce1fe18a4c422",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

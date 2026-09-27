export const name="animation";
export const id="dl_6e258746d554378fb76a";
export const url=new URL("../icons/animation.svg?v=c07f8b48bc0d8240f665d7ab821ab8d7a2dd7eaf2c30bea7581e946a07706495",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

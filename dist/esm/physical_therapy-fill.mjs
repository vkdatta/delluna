export const name="physical_therapy-fill";
export const id="dl_7a752d4903870d2004c9";
export const url=new URL("../icons/physical_therapy-fill.svg?v=960abf151a8e697d601c76a5f2124c9f63baab1bc69a77cd3cafd089f718e102",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="cloud-sun";
export const id="dl_57a0d53ad92547349820";
export const url=new URL("../icons/cloud-sun.svg?v=df0c2a84f643c2b5aedb7022326aecc578cffbaaad9c7c59f58c4964fb2d83d3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

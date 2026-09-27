export const name="hospital-fill";
export const id="dl_a62acd5d31e0445a9ca5";
export const url=new URL("../icons/hospital-fill.svg?v=35dfb41c64d0b358b9fd374c7e9e6141da3dc10bb2426ea432a9c11f141a10c6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

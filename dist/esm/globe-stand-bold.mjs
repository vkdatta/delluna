export const name="globe-stand-bold";
export const id="dl_ac27d72f81dc490ca994";
export const url=new URL("../icons/globe-stand-bold.svg?v=70ad98458c44564d5b202722aa6cd9c9af9492cf72488a7a1528a68327d94df5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

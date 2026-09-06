export const name="file-image-light";
export const id="dl_6855bf60552c4620a317";
export const url=new URL("../icons/file-image-light.svg?v=96263ff7d8bac87e71043f8148fe748a8bc66f86aa669cd48e65d3e074026237",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

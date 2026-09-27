export const name="dna-bold";
export const id="dl_cdef57ff216b41148d7e";
export const url=new URL("../icons/dna-bold.svg?v=c96a0ed3b5f24a43c73377c84e842b9983deb9c993ee0bc33328d47bb8606791",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="folders-light";
export const id="dl_0dcbe10a07d14359b382";
export const url=new URL("../icons/folders-light.svg?v=d4c8af0d9e057bf1fa2785473578b8b1d3dcea0dbb329a7cdef9d1a1ddd8025f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

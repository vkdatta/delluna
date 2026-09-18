export const name="shape_line-fill";
export const id="dl_58571cdef5fb40ca951f";
export const url=new URL("../icons/S/shape_line-fill.svg?v=da04a1e35ee18742c7e563e92f011a5fc52bb661f5f7a91d136259ce3d1bd116",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="columns-plus-right-light";
export const id="dl_bde6d3dedfce42f5a998";
export const url=new URL("../icons/columns-plus-right-light.svg?v=e0ec927e64d48b69c0412b01eb393341519cdef2ca742e3953e3aa8c3e8d61d9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

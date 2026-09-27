export const name="mobile_block";
export const id="dl_ada609dabe500cf87e11";
export const url=new URL("../icons/mobile_block.svg?v=cef24e340f9d4255b637f2758fa4e57a927f136cdef25b54a8e2c5b3156eeabf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

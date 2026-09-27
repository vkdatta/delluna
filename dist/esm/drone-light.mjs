export const name="drone-light";
export const id="dl_ddf234f8ad8e49c1bf5f";
export const url=new URL("../icons/drone-light.svg?v=5e7cce89599b9c6416751d3fe97cdef17ff9405870a124e550e73b510d85663e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

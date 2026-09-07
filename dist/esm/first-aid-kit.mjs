export const name="first-aid-kit";
export const id="dl_c7f8fcf0a336445b9b5d";
export const url=new URL("../icons/first-aid-kit.svg?v=9c76b82605b1cdef3345301dafe50619f6d84eba2eba703a7aec1ac171ff8eb4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

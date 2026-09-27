export const name="bag-light";
export const id="dl_c3d2505cf78d4efbbc52";
export const url=new URL("../icons/bag-light.svg?v=593640d4f454b6d3a040b465efc653c833555d9b69d880d53adfb861db9c68cb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

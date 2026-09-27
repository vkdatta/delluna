export const name="local_see";
export const id="dl_d5b82015e98c1ee8c543";
export const url=new URL("../icons/local_see.svg?v=bc1625cf548df777dd246e49e982f6729c664f9834286657552584c37615798a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

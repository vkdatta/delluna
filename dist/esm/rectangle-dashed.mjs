export const name="rectangle-dashed";
export const id="dl_11c43eb26011487e965a";
export const url=new URL("../icons/rectangle-dashed.svg?v=e91f850604722e0c6b2643913bf19f1bdabc99db0c11e01bd08e4ac4616fb6df",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

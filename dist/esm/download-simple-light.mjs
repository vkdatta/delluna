export const name="download-simple-light";
export const id="dl_c840de55f3684ed9ab80";
export const url=new URL("../icons/download-simple-light.svg?v=972095a83feaa2d1d1549407013a6596ce5cf9ac3d331f215d6e6da3f74e7e0a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

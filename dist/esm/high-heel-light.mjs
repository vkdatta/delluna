export const name="high-heel-light";
export const id="dl_a5452f4fc3594303a534";
export const url=new URL("../icons/high-heel-light.svg?v=3cfd85e86fff5cd27a6d3d98c3b9b0e1169f6f89e625eae0ac64a2876f902bfe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="glyphs-fill";
export const id="dl_e179563fe2101a5449a4";
export const url=new URL("../icons/glyphs-fill.svg?v=85da69e28f6b8a9f802205cc9fd5a9767a48954c6a9d5f088efa1dc2d44709f8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

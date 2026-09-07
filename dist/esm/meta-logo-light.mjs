export const name="meta-logo-light";
export const id="dl_f19a33fec9b5486b8033";
export const url=new URL("../icons/meta-logo-light.svg?v=96ccbb40c75655e68a3336f1055333739a0065f9ab53605a02c7fc23329e6ce7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

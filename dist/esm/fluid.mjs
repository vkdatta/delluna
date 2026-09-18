export const name="fluid";
export const id="dl_a53a2d108d754507a2d4";
export const url=new URL("../icons/fluid.svg?v=5870db255260cefb97dabb476f1ee1b2747d08d4954c6dc22b74e9dcf7abad72",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

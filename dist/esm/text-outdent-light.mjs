export const name="text-outdent-light";
export const id="dl_cb7ff4e15623327042cd";
export const url=new URL("../icons/text-outdent-light.svg?v=1553df13992db8bc9bebc5e6374182c2278ff111b7436e36d421677bee186492",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

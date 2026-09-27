export const name="brackets-angle-duotone";
export const id="dl_3a810e95c3194d12a966";
export const url=new URL("../icons/brackets-angle-duotone.svg?v=1aa7fadb30286ed47193bff219d70cb8618300e4f182ec3839f3931398a00118",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

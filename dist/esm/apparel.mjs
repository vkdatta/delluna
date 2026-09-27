export const name="apparel";
export const id="dl_1370b4670fe0f80a8252";
export const url=new URL("../icons/apparel.svg?v=fd7927bd88da534aff4ac06bc1f29c3037e63187065d7962dfbf215e42f1dae8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

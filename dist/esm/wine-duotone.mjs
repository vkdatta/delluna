export const name="wine-duotone";
export const id="dl_36f230d68df997a63f5c";
export const url=new URL("../icons/wine-duotone.svg?v=a20f9120b0697885e7bd8ef7a919aefc37d909749178c229ff696ffdbce10b75",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

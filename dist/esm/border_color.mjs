export const name="border_color";
export const id="dl_ee78905e1f30f8a647a7";
export const url=new URL("../icons/border_color.svg?v=1269332f39ef13013d29c5f31a1ce7d5ff93b78167e387f6614c894a602b8097",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

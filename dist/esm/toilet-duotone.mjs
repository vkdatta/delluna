export const name="toilet-duotone";
export const id="dl_be2676334f2bd7d372ba";
export const url=new URL("../icons/toilet-duotone.svg?v=1299f13794dc341eb34f6c3a43067b94a751a5ca0b0138bd8756e7862483134a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

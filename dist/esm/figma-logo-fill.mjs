export const name="figma-logo-fill";
export const id="dl_e06607ed1005445d917e";
export const url=new URL("../icons/figma-logo-fill.svg?v=e40d4ed535c32dea801503392c4795f4ed87fe5977bacb5dec03ad7ce6fcbd74",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="yin-yang-light";
export const id="dl_c5a1891897cd55a298ec";
export const url=new URL("../icons/yin-yang-light.svg?v=36762608ee69e225f4f50ce44937c8112b28645e47a5e449c70dfc2404b9dae6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

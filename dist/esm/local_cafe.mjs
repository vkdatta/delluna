export const name="local_cafe";
export const id="dl_f4ad90289609c8e7a549";
export const url=new URL("../icons/local_cafe.svg?v=27c3a0271f27a2d09ed5f76ba4573374b3f6776d5fd8125439a32a8190439582",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

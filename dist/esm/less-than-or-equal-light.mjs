export const name="less-than-or-equal-light";
export const id="dl_348a27005563420eb125";
export const url=new URL("../icons/less-than-or-equal-light.svg?v=bd22a1707876f32252f7c7827a1ec13eee7ec14f7e4335c9cc15f90493ce5300",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

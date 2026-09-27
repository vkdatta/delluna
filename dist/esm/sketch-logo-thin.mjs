export const name="sketch-logo-thin";
export const id="dl_c2f519860ef7083d306b";
export const url=new URL("../icons/sketch-logo-thin.svg?v=5676797b3553df05b2720a3ea8e527db5a6ea4718a8e305e6250862b7e26b4af",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

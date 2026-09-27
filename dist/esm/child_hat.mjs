export const name="child_hat";
export const id="dl_38815985e7e6a2cab5d4";
export const url=new URL("../icons/child_hat.svg?v=8414f974885eabd5405186ed14f824fc26c93cea7addc96eb63cde6ab5851f8d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

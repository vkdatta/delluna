export const name="caret-circle-up-light";
export const id="dl_f98fdc2317214e49a421";
export const url=new URL("../icons/caret-circle-up-light.svg?v=1e812d17e608e5d20c68bc7510e0fc88521b73292fa965f221ef05c2c41569b9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

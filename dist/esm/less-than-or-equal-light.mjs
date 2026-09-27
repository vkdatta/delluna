export const name="less-than-or-equal-light";
export const id="dl_348a27005563420eb125";
export const url=new URL("../icons/less-than-or-equal-light.svg?v=1d3df6e8f0851e3a180939c7cb339bd6ab7aa593fac6a6cba53d3c7f4130e2ea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

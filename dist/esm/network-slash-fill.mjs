export const name="network-slash-fill";
export const id="dl_24e26c22309c46b595d3";
export const url=new URL("../icons/network-slash-fill.svg?v=f89933f7d3055f1e53a550ada6ed6ceda2d118872107e7fec9f8c0b3aeb1f247",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

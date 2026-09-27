export const name="vpn_key";
export const id="dl_63e9bf233631d96425a9";
export const url=new URL("../icons/vpn_key.svg?v=cc85db47d00f6de4735102403521d3dde103c7035edd0eec28f24dda64b53168",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

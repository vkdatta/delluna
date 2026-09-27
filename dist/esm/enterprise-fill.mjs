export const name="enterprise-fill";
export const id="dl_083943f47a91f19853e9";
export const url=new URL("../icons/enterprise-fill.svg?v=0948e531e1682311c40fabc217f5cebfc0ec73643f046391e063e98c679b5b5f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

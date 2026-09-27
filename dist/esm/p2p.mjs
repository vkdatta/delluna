export const name="p2p";
export const id="dl_ea8356bb875d22857328";
export const url=new URL("../icons/p2p.svg?v=f7cfd226462f91653d40fe141c3aef65184256c201ab6da69e287547e1c14f91",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

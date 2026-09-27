export const name="network_manage-fill";
export const id="dl_73ae3f81ebc61c2af012";
export const url=new URL("../icons/network_manage-fill.svg?v=1e8469bd985678e4bfbddb7b11017251903d26079804348964ff3cce4815bf80",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

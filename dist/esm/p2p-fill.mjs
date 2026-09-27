export const name="p2p-fill";
export const id="dl_94f599e58c4d26b17a48";
export const url=new URL("../icons/p2p-fill.svg?v=f7810a6745b38ef7c2b04b658dad5141ed1c56aed78c8ae5c457d3ce869cc13c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

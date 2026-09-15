export const name="energy_savings_leaf";
export const id="dl_0a6a7fe0285345dbae04";
export const url=new URL("../icons/E/energy_savings_leaf.svg?v=755d8a257da229aa39963855ae92a1f82f5a5592f5ba1e50a9db2ae8d662ea54",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

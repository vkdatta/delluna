export const name="network_intelligence_history-fill";
export const id="dl_001d4bc914c3220c8763";
export const url=new URL("../icons/network_intelligence_history-fill.svg?v=8be7541464b164d17196a74450a7aae7079845658138adfd50c57818e41b495f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

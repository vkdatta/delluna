export const name="arrows-out-line-horizontal-duotone";
export const id="dl_0a2e42ba0ce949168e50";
export const url=new URL("../icons/arrows-out-line-horizontal-duotone.svg?v=e87e9dd01e1558f6eee8f514e04c4ef1e182fa0df4e581ed5339cf47806abbac",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

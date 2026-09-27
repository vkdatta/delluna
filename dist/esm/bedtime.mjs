export const name="bedtime";
export const id="dl_02a68f477cf7baf1e452";
export const url=new URL("../icons/bedtime.svg?v=fe019aa57dc7d3943020b9f8da246dacbc6e998789a1b8496f1342ae885c9fe9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="flowchart";
export const id="dl_ae9d55d62f452b8b7eb0";
export const url=new URL("../icons/flowchart.svg?v=b332e111a518f221f36bc3209cd2456e92f5d088bfc3aff2b19cd0232747ef80",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

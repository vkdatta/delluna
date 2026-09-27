export const name="network_node-fill";
export const id="dl_6fa3384aeceea1175b4f";
export const url=new URL("../icons/network_node-fill.svg?v=d6d4d24d49285be1a8dd7743bca623e1c02244d32aa7f89ab140ee54bcc5d786",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

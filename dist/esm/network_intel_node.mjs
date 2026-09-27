export const name="network_intel_node";
export const id="dl_db06a2a93f05a397264d";
export const url=new URL("../icons/network_intel_node.svg?v=9e2fcdd3a0e6c7f3ec3fae183ebcc564657de292b2355566f30a55d5b29753e7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

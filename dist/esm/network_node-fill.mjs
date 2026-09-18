export const name="network_node-fill";
export const id="dl_b420e26f38f74cc38fc8";
export const url=new URL("../icons/N/network_node-fill.svg?v=0a6790d5b25ae4e09baf1541c6e9469f6f87fb4255acbb3f4418fae4eb02aa80",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

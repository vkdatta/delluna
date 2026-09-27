export const name="tools_pliers_wire_stripper-fill";
export const id="dl_b024be6ca8ffbb7363b5";
export const url=new URL("../icons/tools_pliers_wire_stripper-fill.svg?v=59e4b783d28702a31a65dc1d472da5a2f0a7aa325ef8ab69f3891c15815e5ba3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

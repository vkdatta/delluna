export const name="network_node-fill";
export const id="dl_8c9a35dc12be6d355719";
export const url=new URL("../icons/network_node-fill.svg?v=f8722c137d7262dfdf7592e68ef403ca4ecc68b985615dd94b18e2e2a2f4a678",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

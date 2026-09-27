export const name="network_node-fill";
export const id="dl_830fbaed2b83baa7bc1c";
export const url=new URL("../icons/network_node-fill.svg?v=a469bc144d9ace4a38f0768c14ac0a83d36d90ea51b8f29563e62cd08d19c417",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

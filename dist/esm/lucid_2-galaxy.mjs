export const name="lucid_2-galaxy";
export const id="dl_af5a969136fd414d9929";
export const url=new URL("../icons/lucid_2-galaxy.svg?v=fe874b063241b7513bb921ec395a55bba560ffee1e0cd15f4fe8344ccc029b52",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

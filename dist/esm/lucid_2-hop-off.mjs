export const name="lucid_2-hop-off";
export const id="dl_e1fdd9e32b5e41fa97c3";
export const url=new URL("../icons/lucid_2-hop-off.svg?v=566bef3fbac53b91197219194361d485a029b07f9a0bc54e0b88321ae8b2fe77",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

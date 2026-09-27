export const name="lucid_2-ear-off";
export const id="dl_aa99a1f3252349b9a554";
export const url=new URL("../icons/lucid_2-ear-off.svg?v=1245eada79277d11c28aae8d701c03bc507cf533bb7a677a79a2f0d4686b4a29",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

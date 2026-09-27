export const name="lucid_2-hop-off";
export const id="dl_e1fdd9e32b5e41fa97c3";
export const url=new URL("../icons/lucid_2-hop-off.svg?v=52b8d8045cad81b9f9c6b70ca4a96260c053c7a805c9e62084623db17ea301f1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

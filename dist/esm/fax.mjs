export const name="fax";
export const id="dl_a10cad083f2b496b3ee8";
export const url=new URL("../icons/fax.svg?v=efa952e060d119fa6f1017f59d17c168f21fefee6ddbe1c282c5a1d43d0bd0c9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

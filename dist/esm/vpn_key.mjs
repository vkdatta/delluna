export const name="vpn_key";
export const id="dl_5c720ae3c56173565e5e";
export const url=new URL("../icons/vpn_key.svg?v=dac9e98ad0b68ef95699a1f9d80877966fe3150418a3de432e1092a6b8ac3c4b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

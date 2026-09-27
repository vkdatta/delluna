export const name="battery-full";
export const id="dl_a64845c7d1194b2e9c3e";
export const url=new URL("../icons/battery-full.svg?v=5a40a2b68263fd02b3ee7f3d30ece0878d80a509ca583921d40ff2226b2fa629",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

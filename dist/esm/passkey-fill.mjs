export const name="passkey-fill";
export const id="dl_25c24495a5132ba5f472";
export const url=new URL("../icons/passkey-fill.svg?v=c107dec0a0a1e4c7e40eff7d18b2786a357feab5d8766b6da4845803c4a3e53d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

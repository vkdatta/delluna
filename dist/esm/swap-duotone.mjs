export const name="swap-duotone";
export const id="dl_a55cea184b0742b981c5";
export const url=new URL("../icons/S/swap-duotone.svg?v=d7d459bb2918f4bf0fdec04cf7761ccdb624ea159666e8e62cc171a4e695b2de",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

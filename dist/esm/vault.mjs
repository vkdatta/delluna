export const name="vault";
export const id="dl_c4b593a6306144c38da6";
export const url=new URL("../icons/vault.svg?v=a8ef478a2c923da083b26981d69d9da81cf1d2e515a98387fb127dcdc26d48bf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

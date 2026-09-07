export const name="vault-bold";
export const id="dl_029ee9d538bc4437b7c2";
export const url=new URL("../icons/V/vault-bold.svg?v=97fa876c87657e16091bddcbf2d227837f1c2353e26bdb0776bffba21e6def35",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

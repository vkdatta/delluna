export const name="no_accounts-fill";
export const id="dl_f4b2bcbfaddba8c11cff";
export const url=new URL("../icons/no_accounts-fill.svg?v=987c1fe7e93a5e56dae35d6c9a91996fe50747755ee69aff168bbd112180b4d2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="wallet";
export const id="dl_efd2b75b5db745ec9605";
export const url=new URL("../icons/W/wallet.svg?v=9ae5c252608e1bda6dfe75f23599b1881a9476f8cc2069cd9083136fafe664f0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

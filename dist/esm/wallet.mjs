export const name="wallet";
export const id="dl_efd2b75b5db745ec9605";
export const url=new URL("../icons/wallet.svg?v=fb52aaf53538c2d615d5f9ea0977c94ea315c34abba68f0ed606aef95c12b85c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="wallet-duotone";
export const id="dl_6a741b61c3489c2af039";
export const url=new URL("../icons/wallet-duotone.svg?v=a159b3bf980ad83d4033884f33c1b7a0d0102caf03de43845b24a2deb0a87b6c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

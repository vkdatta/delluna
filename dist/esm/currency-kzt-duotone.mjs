export const name="currency-kzt-duotone";
export const id="dl_6758cd25cac24f5593f6";
export const url=new URL("../icons/currency-kzt-duotone.svg?v=080eecd50b844eaa3cf98773ebe57f2e175ea3fd2e02c2cbb3ad625de154e27b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

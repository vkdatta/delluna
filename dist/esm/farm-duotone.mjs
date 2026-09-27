export const name="farm-duotone";
export const id="dl_818673b0fc4b4e7fa2f4";
export const url=new URL("../icons/farm-duotone.svg?v=bd236b9edd26d50eb4012ef68f28e2a44c11aaea83639ca8cbf1398e02e42129",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

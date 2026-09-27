export const name="network-x-duotone";
export const id="dl_7867ac067abd4842a7c5";
export const url=new URL("../icons/network-x-duotone.svg?v=f47a8e0fc196f8fdc64d6762697ed3b5d19723e8948782e4566e2deb5a2c0e25",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

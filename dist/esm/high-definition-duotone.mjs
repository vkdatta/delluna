export const name="high-definition-duotone";
export const id="dl_ebee83097b4849e28d4b";
export const url=new URL("../icons/high-definition-duotone.svg?v=43aa63481137d03a0a7e1d0e21ed63142ac1adbbf755b55f339d0334b52bc341",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

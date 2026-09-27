export const name="database-duotone";
export const id="dl_dc3703ce0b3541c7bb68";
export const url=new URL("../icons/database-duotone.svg?v=b61fcf1b457baea6fb5e4e557ebd82c65d4882bf89690e968d078bc1dd29f7ab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

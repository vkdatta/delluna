export const name="shopping-bag-duotone";
export const id="dl_0a67042bb3bff3c62beb";
export const url=new URL("../icons/shopping-bag-duotone.svg?v=568e3f6616e1753f47e4ef14d9366978f8883e89a1334e2a0a571568768de85c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="wallet-duotone";
export const id="dl_4dd1ee4e23b49dfb4577";
export const url=new URL("../icons/wallet-duotone.svg?v=a23f49f00399f5bad3ca87a4ace8dcb9802eca842474e87a131e70d888e0f5ab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="address-book-duotone";
export const id="dl_6e17cc7345204594a909";
export const url=new URL("../icons/address-book-duotone.svg?v=82423db30fcf53e8e7d076df824489b48ff13a72bde1a8997671512a79b64f34",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

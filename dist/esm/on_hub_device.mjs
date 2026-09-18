export const name="on_hub_device";
export const id="dl_efb3361e0a4542ee9deb";
export const url=new URL("../icons/on_hub_device.svg?v=5c5f4c66c839b1a91abf7cc29beab1fee9191324a66ead8fd0eb5dffffe49e0c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="skype-logo-duotone";
export const id="dl_5fd9a7c4401f4d139abd";
export const url=new URL("../icons/S/skype-logo-duotone.svg?v=3e1d9f5d2bd9be85e5872349ffc4e7e4ae031db0536e79f9a27723180a0fdb8d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="angular-logo-duotone";
export const id="dl_5a96c6a5557740dd900c";
export const url=new URL("../icons/angular-logo-duotone.svg?v=9954dcf8a9aad545c9eff6438abfd848b943855d065009d059bcfcd90a9b1529",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

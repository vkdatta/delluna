export const name="wechat-logo-duotone";
export const id="dl_e030b9f7f6dc3602bbee";
export const url=new URL("../icons/wechat-logo-duotone.svg?v=348cae43582549db2671af050f5c3dd59083ab8001b98360e31329c408ecc632",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

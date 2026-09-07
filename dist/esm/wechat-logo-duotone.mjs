export const name="wechat-logo-duotone";
export const id="dl_84c384e157c8481a8643";
export const url=new URL("../icons/W/wechat-logo-duotone.svg?v=b28d67e9e23f32473c56ac7dd7f01370809081b6115e0afef84cecd310c49243",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

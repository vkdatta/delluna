export const name="less-than-or-equal-thin";
export const id="dl_7e63014de59e482cb9c3";
export const url=new URL("../icons/less-than-or-equal-thin.svg?v=056873cdc9a8bcdd16c99a91e2d28bbedb5450027eb13c2b97307ef632660190",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

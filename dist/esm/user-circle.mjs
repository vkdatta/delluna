export const name="user-circle";
export const id="dl_d008400ffccb2fa5672e";
export const url=new URL("../icons/user-circle.svg?v=f0e809c694eb36e4d9217b96bf0ae365bf30f0a01d104a3b528a31d95545da98",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

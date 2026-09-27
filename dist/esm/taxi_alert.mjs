export const name="taxi_alert";
export const id="dl_5219a8bd4ad3b4fdb84d";
export const url=new URL("../icons/taxi_alert.svg?v=80efeceacef707c626201e2cbbcbb697d628f8cb180f61a349f66884e312e508",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

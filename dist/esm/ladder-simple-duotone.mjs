export const name="ladder-simple-duotone";
export const id="dl_2e36bcc7e28d46019b06";
export const url=new URL("../icons/ladder-simple-duotone.svg?v=c90af948bd2ac5562b88f88c4fc46f55deebe0aad29f8852d096aa4e7348b159",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

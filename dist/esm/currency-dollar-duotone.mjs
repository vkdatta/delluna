export const name="currency-dollar-duotone";
export const id="dl_cbd8eaff1fbb4287bc3b";
export const url=new URL("../icons/currency-dollar-duotone.svg?v=7df0765ea8da5aa694cee2f3bb7112b5e36c899022043004a0fb3dd930df285f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="lock-laminated-open-duotone";
export const id="dl_b66fc4d137554622a098";
export const url=new URL("../icons/lock-laminated-open-duotone.svg?v=e3fb9b35ee9b46bcca762bfcae2c4bb764bf03606f5d7692b7341096adbd58e3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

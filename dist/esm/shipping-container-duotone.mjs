export const name="shipping-container-duotone";
export const id="dl_eaae71955b664d4d9468";
export const url=new URL("../icons/S/shipping-container-duotone.svg?v=c5e4f474f00a7fc3e4510cc286a40b219648e4bc8f4c0ffe8118eeb4c8d7106e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

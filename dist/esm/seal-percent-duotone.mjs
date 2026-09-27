export const name="seal-percent-duotone";
export const id="dl_b2d302fe728a071afa92";
export const url=new URL("../icons/seal-percent-duotone.svg?v=6f6caecb577af416bc28bf0aa2a69a763d626526f0ec05dfd4f56fb3b266ca13",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

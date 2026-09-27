export const name="instagram-logo-duotone";
export const id="dl_8ec4eb473852450d85bf";
export const url=new URL("../icons/instagram-logo-duotone.svg?v=311aa29ca6aa50274c27d3a45f2940928e031b290ca843d82edf63ba450dbf32",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

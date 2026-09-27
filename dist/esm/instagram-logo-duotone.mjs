export const name="instagram-logo-duotone";
export const id="dl_8ec4eb473852450d85bf";
export const url=new URL("../icons/instagram-logo-duotone.svg?v=d0f10424b1f083eff96b3a53dfb939faf16fe20c9d1cbf6db26a992c737669e5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

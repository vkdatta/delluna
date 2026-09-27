export const name="storefront-thin";
export const id="dl_ce65a77952d305ecb796";
export const url=new URL("../icons/storefront-thin.svg?v=bc38b8675d1aa1f4a58d130385f5e1aa2d098b532f5ea32535161091c531c593",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

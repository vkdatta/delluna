export const name="heart-break-duotone";
export const id="dl_74772ac99d8f49599564";
export const url=new URL("../icons/heart-break-duotone.svg?v=05df49ce2a6cb1cda9121f89042f283e537517479b5b7a29e0bc8b667133411a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

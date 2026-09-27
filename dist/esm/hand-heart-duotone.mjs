export const name="hand-heart-duotone";
export const id="dl_a534e690e07b477fb192";
export const url=new URL("../icons/hand-heart-duotone.svg?v=b15b186cedd3729aad75e0c50de7497985f28a5033febc5bf7c9d10ffc025596",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

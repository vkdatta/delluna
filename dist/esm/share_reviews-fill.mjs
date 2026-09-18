export const name="share_reviews-fill";
export const id="dl_00d0564018294629ad84";
export const url=new URL("../icons/S/share_reviews-fill.svg?v=fa563f0c9ba1ca81d68f0ab01b052be2c309b4eb3a76fca9e9f96a287e7c09ab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

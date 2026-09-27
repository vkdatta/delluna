export const name="phone-incoming-fill";
export const id="dl_d7e56956c3944a8f8ae6";
export const url=new URL("../icons/phone-incoming-fill.svg?v=a25bc78a6e6133cdb0acdde48fa2b7e6e3449f1f0d01b47f5c71656c01fbc7fb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

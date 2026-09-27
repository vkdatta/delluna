export const name="contact_mail-fill";
export const id="dl_0e2dfe8ca6511b23b7f8";
export const url=new URL("../icons/contact_mail-fill.svg?v=53f1df96e69b042a7c383b6815d45e0e9b8d51cbe0120cdf924b23561c9e0109",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

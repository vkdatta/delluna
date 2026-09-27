export const name="phone";
export const id="dl_d4a1fb7e612b4dc2ac1a";
export const url=new URL("../icons/phone.svg?v=bfd2d82de2ee51354d850c83a577e865401187134228a2257e9dc5bbfcc145d3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="heart-straight-break-duotone";
export const id="dl_d81f23baa5c5452ab081";
export const url=new URL("../icons/heart-straight-break-duotone.svg?v=390948b01cb80a5ef26c8486b29018209f28c7bf332c5cd1b647ab658f4b795a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

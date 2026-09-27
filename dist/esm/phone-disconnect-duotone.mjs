export const name="phone-disconnect-duotone";
export const id="dl_692b18fd4ba64e9faedb";
export const url=new URL("../icons/phone-disconnect-duotone.svg?v=a9dda57e87c7ff15ee7ed270d7174b55d8993e030392caa6702c5e85726f8c78",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

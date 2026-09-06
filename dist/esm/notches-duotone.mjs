export const name="notches-duotone";
export const id="dl_3ce53210211d4cd9ae13";
export const url=new URL("../icons/notches-duotone.svg?v=7e0754b7d11fa2d379be4e76afa515176d057d0312492172c9e6d54804f83d2f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

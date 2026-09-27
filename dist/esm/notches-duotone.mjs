export const name="notches-duotone";
export const id="dl_3ce53210211d4cd9ae13";
export const url=new URL("../icons/notches-duotone.svg?v=086a06d865433e60da854b43cf82ae8826750b15d73438cbb09fce721bbe78df",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

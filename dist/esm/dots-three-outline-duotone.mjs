export const name="dots-three-outline-duotone";
export const id="dl_ec93b84bd2d94d4e93d5";
export const url=new URL("../icons/dots-three-outline-duotone.svg?v=971cf0c21acad9de59a814064cf04a0384456578d9404d038244d39d4d7a8e1b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

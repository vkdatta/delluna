export const name="user-sound-bold";
export const id="dl_aad3ecc62e2d6858fb67";
export const url=new URL("../icons/user-sound-bold.svg?v=63dcd36447a254d0164874445db90aeb7a3108ee52d9be44ed4eb94dde71d11a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

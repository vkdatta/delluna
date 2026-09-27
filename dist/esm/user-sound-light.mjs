export const name="user-sound-light";
export const id="dl_25c00a00e2974618da1a";
export const url=new URL("../icons/user-sound-light.svg?v=c5d347409066f90efb1cba3956f3125ddf143638fe4d164c73bce97a1d987f11",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

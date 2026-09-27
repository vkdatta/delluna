export const name="globe-hemisphere-west-light";
export const id="dl_8a196b4761e247f3a909";
export const url=new URL("../icons/globe-hemisphere-west-light.svg?v=f5ef6a8995b9978bd2aceda998814da62eed03b4151ea402fc0efc2a1a852c07",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

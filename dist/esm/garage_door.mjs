export const name="garage_door";
export const id="dl_d69425fea5024df8a37a";
export const url=new URL("../icons/G/garage_door.svg?v=973f48b66bb2d8ab2be2305de7fc2ca978cf9aa0553a85cbd77098730356c377",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

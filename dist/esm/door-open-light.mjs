export const name="door-open-light";
export const id="dl_a879be9c01744b99b34b";
export const url=new URL("../icons/door-open-light.svg?v=25c332fece5acc0fb981b0899ab57de2fb71d752a47a3d5a42e1173f2e4d285e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

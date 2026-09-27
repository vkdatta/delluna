export const name="alarm-duotone";
export const id="dl_692cd3eae7814c3e87a1";
export const url=new URL("../icons/alarm-duotone.svg?v=111f5a7ac277c8540f5d0ff89d6b2aba7c1922c423201c298ce1d247f07f1908",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

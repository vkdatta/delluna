export const name="phone-list";
export const id="dl_4f0b958c6e9d4d739178";
export const url=new URL("../icons/phone-list.svg?v=fd150dfc4426c48d1998570551f0ba597e0e3d58191084d35e47bb9abdd3f6b5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="phone-plus-light";
export const id="dl_259a7275af104aabb7a7";
export const url=new URL("../icons/phone-plus-light.svg?v=8d746cac44368c089f7372117081208ecf9ae2dda8aed7f4192e15d222ada35b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

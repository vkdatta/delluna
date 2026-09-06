export const name="crane-tower-duotone";
export const id="dl_79e8296ac0034443b321";
export const url=new URL("../icons/crane-tower-duotone.svg?v=9b74916bb580a42fbf070d73ad737e87520e5902d8fcbfee47637aeddae817ae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

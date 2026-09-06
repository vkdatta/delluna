export const name="phone-plus-light";
export const id="dl_259a7275af104aabb7a7";
export const url=new URL("../icons/phone-plus-light.svg?v=e8ae393739fe68f6e648205ce47c1fc5d02a11585a4961f94e21fcbe2e559075",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

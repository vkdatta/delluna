export const name="fire_check";
export const id="dl_8043566e8e6b383af176";
export const url=new URL("../icons/fire_check.svg?v=2606b6958ab4272aae76fd6cee6ef896587b47cf8165de78ba46e8861a8ab80c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="student";
export const id="dl_3b948fe424b8ac0a39a2";
export const url=new URL("../icons/student.svg?v=bb5c3ea6c20ce788ea697677e10121d64444b801837d524c65c9fb6c59394b13",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

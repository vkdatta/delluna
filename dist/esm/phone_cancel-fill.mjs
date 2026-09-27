export const name="phone_cancel-fill";
export const id="dl_d9e24c570a56d6ed2297";
export const url=new URL("../icons/phone_cancel-fill.svg?v=bc24ee60df3805e1f3945e490c475eaaa516b7c1d2f73944ffb8e51e6793f3d0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

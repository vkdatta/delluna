export const name="mail_shield-fill";
export const id="dl_20306e82410c9248445a";
export const url=new URL("../icons/mail_shield-fill.svg?v=4d556ba1e782e56db3d8c8b7478e37f25f0bb2ca590f968041dfa8e6495b0703",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

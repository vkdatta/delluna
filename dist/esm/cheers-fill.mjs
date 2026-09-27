export const name="cheers-fill";
export const id="dl_6bdd1e2d27db4671a12f";
export const url=new URL("../icons/cheers-fill.svg?v=63e193f336d9f88c7017325574b5b0b4bc721f1021c2aa39299cbf2cab97affd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

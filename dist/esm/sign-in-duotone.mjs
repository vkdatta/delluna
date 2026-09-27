export const name="sign-in-duotone";
export const id="dl_6eeb675a7077725ed5f9";
export const url=new URL("../icons/sign-in-duotone.svg?v=2ca1dfbe67a46aa957ca0550777398067e8994a3ffe09e706069946662898277",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="identification-badge-light";
export const id="dl_3a59d114a1b3457e9c73";
export const url=new URL("../icons/identification-badge-light.svg?v=e2bfd96769094ecc1b5e20985f6b4c8518c1084620ccd21a334f6394950c6ab3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

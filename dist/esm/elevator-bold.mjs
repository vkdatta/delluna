export const name="elevator-bold";
export const id="dl_b5d0094497614179bc90";
export const url=new URL("../icons/elevator-bold.svg?v=bf4d97e83e57ef1c05280c51e8de5eac6cb90078f57605862f0b289c7466e2da",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

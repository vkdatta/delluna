export const name="cookie-light";
export const id="dl_21ee4f8115b341dbadbf";
export const url=new URL("../icons/cookie-light.svg?v=7d9823226caf52a3e8f3c0bfda569f0e2fe7acd553193f7e30122f3d8fb66176",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

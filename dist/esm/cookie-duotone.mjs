export const name="cookie-duotone";
export const id="dl_e32ca7e5958e40858200";
export const url=new URL("../icons/cookie-duotone.svg?v=32ea64cca875d212b14c777a0067e9f37996fb2e62c6df5cfaf842e7d2eedc7d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

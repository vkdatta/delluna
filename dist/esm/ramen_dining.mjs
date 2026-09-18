export const name="ramen_dining";
export const id="dl_50dc300851b845a8bfdf";
export const url=new URL("../icons/ramen_dining.svg?v=438e4919cd4d842684922cca3efeab31b40df0d6b15c7b7e9481e4c1894a67b3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="congenital";
export const id="dl_68ad6dd55b0b6ed6d861";
export const url=new URL("../icons/congenital.svg?v=ee0f190c07980efb1b70cb88e66a6c68b21b0f18a4c404e0d1b185fe3e9cc674",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="megaphone-simple-thin";
export const id="dl_8a765932f8894be5bc59";
export const url=new URL("../icons/megaphone-simple-thin.svg?v=a7b2eb812801ecb7a24b8dc6eeca14b2e4480e9a8bf1df842636923eb8501dc9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

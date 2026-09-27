export const name="oven_gen";
export const id="dl_5b89bdb2066b31d25089";
export const url=new URL("../icons/oven_gen.svg?v=183e0fd571f24da5df652392b1a450be002398606803806aa3e554710d0db96c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

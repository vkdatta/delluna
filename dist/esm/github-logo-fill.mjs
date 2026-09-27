export const name="github-logo-fill";
export const id="dl_2438f7e4234e43ecb9f7";
export const url=new URL("../icons/github-logo-fill.svg?v=015316be03d69ce5bdd4934f04e21471daaaa2d86d6a60decf3ef474465e194e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

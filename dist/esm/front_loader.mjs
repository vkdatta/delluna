export const name="front_loader";
export const id="dl_cd70ef53a1482e8c6b30";
export const url=new URL("../icons/front_loader.svg?v=72fe91e0154e74a29694149f826d54751b9cae69ec6bba0ffd28974da1ab1428",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

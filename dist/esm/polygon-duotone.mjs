export const name="polygon-duotone";
export const id="dl_e358a68dd13b4334ac2a";
export const url=new URL("../icons/polygon-duotone.svg?v=c4099922c9f534360b2bbef30e188b1fac39ebae3faeb3461b73d70517f6ee13",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

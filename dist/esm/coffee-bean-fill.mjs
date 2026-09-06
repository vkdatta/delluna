export const name="coffee-bean-fill";
export const id="dl_e82fe1f36de24b6aa7c9";
export const url=new URL("../icons/coffee-bean-fill.svg?v=fdb2159237ffd9ce172bc3b6227c03c1097ee679e9eb58267ac7d6377d5026b4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

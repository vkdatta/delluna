export const name="basket-thin";
export const id="dl_47de469136854ba58014";
export const url=new URL("../icons/basket-thin.svg?v=410fd02c207f168967eac257e8a8062ccbfb4e93ed2e12945fa158b4b62094cf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
